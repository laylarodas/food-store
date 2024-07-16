import { formatCurrency } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"


type ProductCardProps = {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
    return (
        <div className=" border bg-white ">
            <Image 
                width={400}
                height={500}
                src={`/products/${product.image}.jpg`} 
                alt={`Image ${product.name}`}
            />
            <div className=" p-5">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className=" mt-5 font-bold text-2xl text-amber-500">{ formatCurrency(product.price)}</p>
                <button type="button" className=" bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-semibold cursor-pointer">
                    Add to Order
                </button>
            </div>
        </div>
    )
}
