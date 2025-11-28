import { SITE } from "../lib/seo";

const robots = `User-agent: *
Disallow:

Sitemap: ${SITE.url}/sitemap.xml
Host: ${SITE.url}
`;

export function GET() {
  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
