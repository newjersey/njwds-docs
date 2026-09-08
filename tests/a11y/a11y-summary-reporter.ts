import { appendFile } from "node:fs/promises";
import type { Reporter, TestCase, TestResult } from "@playwright/test/reporter";

const BLOCKING_PREFIX = "a11y-blocking-";
const WARNING_PREFIX = "a11y-";
// most to least severe; anything unrecognized sorts last
const SEVERITY_ORDER = ["critical", "serious", "moderate", "minor"];

type Finding = {
  severity: string;
  description: string;
  isBlocking: boolean;
};

export default class AccessibilitySummaryReporter implements Reporter {
  private findings: Finding[] = [];

  onTestEnd(test: TestCase, result: TestResult): void {
    result.annotations.forEach((annotation) => {
      if (!annotation.description) return;

      if (annotation.type.startsWith(BLOCKING_PREFIX)) {
        this.findings.push({
          severity: annotation.type.slice(BLOCKING_PREFIX.length),
          description: annotation.description,
          isBlocking: true,
        });
      } else if (annotation.type.startsWith(WARNING_PREFIX)) {
        this.findings.push({
          severity: annotation.type.slice(WARNING_PREFIX.length),
          description: annotation.description,
          isBlocking: false,
        });
      }
    });
  }

  async onEnd(): Promise<void> {
    const outputFile = process.env.GITHUB_OUTPUT;
    if (outputFile) {
      await appendFile(outputFile, `findings=${this.findings.length > 0}\n`);
    }

    const summaryFile = process.env.GITHUB_STEP_SUMMARY;
    if (!summaryFile || this.findings.length === 0) return;

    const sorted = [...this.findings].sort(
      (a, b) => SEVERITY_ORDER.indexOf(a.severity) - SEVERITY_ORDER.indexOf(b.severity),
    );

    const lines = [
      "### Accessibility scan results",
      "",
      "Items marked ❌ failed the scan and items marked ⚠️ are below the failure threshold in `tests/a11y/axe-test.ts`.",
      "",
      ...sorted.map((finding) => `- ${finding.isBlocking ? "❌" : "⚠️"} ${finding.description}`),
      "",
    ];
    await appendFile(summaryFile, lines.join("\n"));
  }
}
