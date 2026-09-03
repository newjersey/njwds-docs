import { existsSync, readdirSync } from "node:fs";
import { sep } from "node:path";

const DIST_DIR = "dist";
const EXCLUDED_DIRECTORIES = ["_astro", "pagefind"];
const NOT_FOUND_FILE = "404.html";

export const NOT_FOUND_PROBE_ROUTE = "/a11y-scan-missing-page-probe/";

function toRoute(relativePath: string): string {
  const segments = relativePath.split(sep);
  const file = segments.pop() ?? "";

  if (file !== "index.html") {
    segments.push(file.replace(/\.html$/, ""));
  }

  return segments.length === 0 ? "/" : `/${segments.join("/")}/`;
}

function discoverRoutes(): string[] {
  if (!existsSync(DIST_DIR)) {
    throw new Error(
      `Accessibility scan found no build output at "${DIST_DIR}". Run "npm run build" first.`,
    );
  }

  const routes = readdirSync(DIST_DIR, { recursive: true, encoding: "utf8" })
    .filter((entry) => entry.endsWith(".html"))
    .filter((entry) => entry !== NOT_FOUND_FILE)
    .filter(
      (entry) => !EXCLUDED_DIRECTORIES.some((directory) => entry.startsWith(`${directory}${sep}`)),
    )
    .map(toRoute)
    .sort();

  if (routes.length === 0) {
    throw new Error(
      `Accessibility scan found no pages in "${DIST_DIR}". Run "npm run build" first.`,
    );
  }

  return routes;
}

export const routes = discoverRoutes();
