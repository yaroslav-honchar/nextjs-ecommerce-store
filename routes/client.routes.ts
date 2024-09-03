export const ClientRoutes = {
  home: "/",
  cart: "/cart",
  catalog: (slug: string) => `/catalog/${slug}`,
  product: (slug: string) => `/product/${slug}`,
}
