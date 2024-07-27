

export default function ProductSearchForm() {
    return ( 
        <form className="flex items-center">
            <input 
                type="text" 
                placeholder="Search Product" 
                className="p-2 placeholder-gray-400 w-full"
                name="search"
            />

            <input 
                type="submit" 
                value={"search"}
                className=" bg-indigo-600 p-2 uppercase text-white cursor-pointer"
            />
        </form>
    )
}