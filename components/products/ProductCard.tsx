import { formatCurrency, getImagePath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"


type ProductCardProps = {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {

    const imagePath = getImagePath(product.image)
    return (
        <div className=" border bg-white ">
            <Image 
                width={400}
                height={500}
                src={imagePath} 
                alt={`Image ${product.name}`}
            />
            <div className=" p-5">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className=" mt-5 font-bold text-2xl text-amber-500">{ formatCurrency(product.price)}</p>
                
            </div>

            <AddProductButton product={product}/>
        </div>
    )
}
