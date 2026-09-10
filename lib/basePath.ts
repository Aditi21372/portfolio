// Resolves an internal app path against the deployed basePath.
//
// The site is exported with `basePath: "/portfolio"` in production (see
// next.config.mjs). Next.js only prepends basePath automatically for
// next/link and the router, NOT for plain <a> / motion.a hrefs, so every
// hand-written internal href must run through withBasePath() or it 404s on
// GitHub Pages.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
