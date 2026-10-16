/** Prefix a site-relative path with Astro's deployment base. */
export function withBase(path: string) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
