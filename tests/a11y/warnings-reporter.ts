import { appendFile } from "node:fs/promises";
import type { Reporter, TestCase, TestResult } from "@playwright/test/reporter";

const ANNOTATION_PREFIX = "a11y-";

export default class AccessibilityWarningsReporter implements Reporter {
  private warnings: string[] = [];

  onTestEnd(test: TestCase, result: TestResult): void {
    for (const annotation of result.annotations) {
      if (annotation.type.startsWith(ANNOTATION_PREFIX) && annotation.description) {
        this.warnings.push(annotation.description);
      }
    }
  }

  async onEnd(): Promise<void> {
    const summaryFile = process.env.GITHUB_STEP_SUMMARY;
    if (!summaryFile || this.warnings.length === 0) return;

    const lines = [
      "### Accessibility warnings (non-blocking)",
      "",
      "These violations are below the failure threshold in `tests/a11y/axe-test.ts` and did not fail the build.",
      "",
      ...this.warnings.map((warning) => `- ⚠️ ${warning}`),
      "",
    ];
    await appendFile(summaryFile, lines.join("\n"));
  }
}
