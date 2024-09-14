export const getIdFromSlug = (slug: string) => {
  const splitSlug = slug.split("-")

  return splitSlug[splitSlug.length - 1]
}
