import Link from 'next/link'
import React from 'react'

type ProductsPaginationProps = {
    page: number,
    totalPages: number
}

export default function ProductsPagination({ page, totalPages }: ProductsPaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    
    return (
        <nav className='flex justify-center py-10'>

            {page > 1 && (
                <Link
                    href={`/admin/products?page=${page - 1}`}
                    className=' bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0'
                >&laquo;</Link>
            )}

            {pages.map(currentPage => (
                <Link
                    href={`/admin/products?page=${currentPage}`}
                    className={`${page === currentPage && 'font-bold underline underline-offset-2'} bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                >{currentPage}</Link>
            ))}

            {page < totalPages && (
                <Link
                    href={`/admin/products?page=${page + 1}`}
                    className=' bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0'
                >&raquo;</Link>
            )}

        </nav>
    )
}
