import OrderCard from '@/components/order/OrderCard'
import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma'
import { revalidatePath } from 'next/cache'



async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  })

  return orders
}

export default async function OrdersPage() {

  const orders = await getPendingOrders()

  const refreshOrders = async () => {
    "use server"
    revalidatePath('/admin/orders')
  }


  return (
    <>
      <Heading>Manage Orders</Heading>

      <form action={refreshOrders}>
        <input
          type="submit"
          value='Update Orders'
          className="bg-amber-400 w-full lg:w-auto text-md py-2 px-4 text-center font-bold cursor-pointer"
        />

      </form>

      {orders.length ? (
        <div className=' grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'>
          {orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : <p className=' text-center'> There are not pending orders</p>}
    </>
  )
}
