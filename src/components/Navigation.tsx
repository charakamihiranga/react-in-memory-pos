import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <>
            <header>
                <nav className="bg-blue-500 p-4 flex justify-between items-center px-28">
                    <h1 className="text-white font-bold text-lg">POS System</h1>
                    <ul className="flex space-x-16 text-white font-medium">
                       <Link to={'/'} className={"link"}>Home</Link>
                       <Link to={'/customer'} className={"link"}>Customer</Link>
                       <Link to={'/item'} className={"link"}>Item</Link>
                       <Link to={'/orders'} className={"link"}>Orders</Link>
                    </ul>
                </nav>
            </header>
        </>
    );
}