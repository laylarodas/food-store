"use client"
import { useRouter } from 'next/navigation'

export default function GoBackButton() {
    const router = useRouter()
    return (
        <button
            onClick={() => router.back()}
            className="bg-amber-400 w-full lg:w-auto text-md py-2 px-4 text-center font-bold cursor-pointer"
        >Go back</button>
    )
}
