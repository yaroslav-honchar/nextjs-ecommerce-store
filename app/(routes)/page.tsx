import { Billboard } from "@/components/billboard/billboard"
import { FeaturedProducts } from "@/components/featured-products/featured-products"
import { getBillboard } from "@/services/billboards.service"
import { getProducts } from "@/services/products.service"

const Home = async () => {
  const [billboard, products] = await Promise.all([
    getBillboard("66d5d8e755ccb2f2eef37bec"),
    getProducts({
      params: {
        isFeatured: true,
      },
    }),
  ])

  return (
    <>
      <Billboard data={billboard} />
      <FeaturedProducts data={products} />
    </>
  )
}
export default Home
