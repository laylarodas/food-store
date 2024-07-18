"use client"
import { useStore } from "@/src/store"
import { toast } from "react-toastify"
import ProductDetails from "./ProductDetails"
import { useMemo } from "react"
import { formatCurrency } from "@/src/utils"
import { createOrder } from "@/actions/create-order-action"
import { OrderSchema } from "@/src/schema"


export default function OrderSummary() {

  const order = useStore((state) => state.order)
  const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])


  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get('name')
    }

    /*
    const result = OrderSchema.safeParse(data)
    if(!result.success){
      result.error.issues.forEach((issue) => {
        toast.error(issue.message)
      })

      return
    }*/

    const response = await createOrder(data)
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message)
      })
    }
  }



  return (
    <aside className=" lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className=" text-4xl text-center font-black ">My Order</h1>

      {order.length === 0 ? <p className="text-center my-10">The order is empty</p> : (
        <div className="mt-5">
          {order.map(item => (
            <ProductDetails key={item.id} item={item} />
          ))}

          <p className="text-xl mt-20 text-center">
            Total to pay: {''}
            <span className="font-bold">{formatCurrency(total)}</span>
          </p>

          <form action={handleCreateOrder} className=" w-full mt-10 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className=" bg-white border-gray-100 p-2 w-full"
              name="name"
            />
            <input
              type="submit"
              value="Confirm Order"
              className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold"

            />
          </form>
        </div>
      )}
    </aside>
  )
}
