export const ClientRoutes = {
  home: "/",
  cart: "/cart",
  wishlist: "/wishlist",
  catalog: (slug: string) => `/catalog/${slug}`,
  product: (slug: string) => `/product/${slug}`,
}
