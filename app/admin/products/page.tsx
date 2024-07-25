import ProductTable from "@/components/products/ProductTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";


async function getProducts() {
  const products = await prisma.product.findMany()

  return products
}

export default async function ProductsPage() {

  const products = await getProducts()

  console.log(products)


  return (
    <>
      <Heading>Manage Products</Heading>

      <ProductTable products={products}/>
    </>
  )
}
