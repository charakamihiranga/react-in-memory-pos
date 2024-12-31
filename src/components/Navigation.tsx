import {Link} from "react-router-dom";

export function Navigation() {
    return (
            <header>
                <nav className="bg-blue-500 p-4 flex flex-wrap items-center justify-between px-6 md:px-28">
                    <h1 className="text-white font-bold text-lg mb-2 md:mb-0">POS System</h1>
                    <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-16 text-white font-medium">
                            <Link to={'/'} >Home</Link>
                            <Link to={'/customer'} >Customer</Link>
                            <Link to={'/item'} >Item</Link>
                            <Link to={'/orders'} >Orders</Link>
                    </ul>
                </nav>
            </header>
    );
}