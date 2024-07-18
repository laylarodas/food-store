import Logo from "../ui/Logo"

const adminNavigation = [
    {url: '/admin/orders', text: 'Orders', blank: false},
    {url: '/admin/products', text: 'products', blank: false},
    {url: '/order/coffee', text: 'See store', blank: true},
]

export default function AdminSidebar() {

    return (
        <>
            <Logo />
            <div className="space-y-3 ">
                <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">Navigation</p>
                <nav className="flex flex-col">
                    
                </nav>
            </div>
        </>

    )
}