import { formatCurrency } from "@/src/utils"
import { Product } from "@prisma/client"


type ProductCardProps = {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
    return (
        <div className=" border bg-white ">
            <div className=" p-5">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className=" mt-5 font-bold text-2xl text-amber-500">{ formatCurrency(product.price)}</p>
            </div>
        </div>
    )
}
