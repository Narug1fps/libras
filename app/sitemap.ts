import { SITE, PRODUCT_SLUGS } from "../lib/seo";

export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: `${SITE.url}/`, lastModified: now },
    { url: `${SITE.url}/historia`, lastModified: now },
    { url: `${SITE.url}/produtos`, lastModified: now },
  ];

  const productRoutes = PRODUCT_SLUGS.map((slug) => ({
    url: `${SITE.url}/produtos/${slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...productRoutes];
}
