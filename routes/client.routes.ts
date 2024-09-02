export const ClientRoutes = {
  home: "/",
  catalog: (slug: string) => `/catalog/${slug}`,
  product: (slug: string) => `/product/${slug}`,
}
