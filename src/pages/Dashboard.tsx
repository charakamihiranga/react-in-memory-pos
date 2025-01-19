import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomerContext } from "../contexts/CustomerProvider";
import { ItemContext } from "../contexts/ItemProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBox, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export function Dashboard() {
    const [customers] = useContext(CustomerContext);
    const [items] = useContext(ItemContext);

    return (
        <>
            <section id="HomePage" className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    <Link to="/customer" className="card bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faUsers} className="card-icon text-5xl mb-4" />
                        <div className="card-content text-center">
                            <p className="count text-3xl font-semibold" id="total-customers">{customers.length}</p>
                            <h3 className="card-header text-lg font-medium">Customer</h3>
                        </div>
                    </Link>

                    <Link to="/item" className="card bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faBox} className="card-icon text-5xl mb-4" />
                        <div className="card-content text-center">
                            <p className="count text-3xl font-semibold" id="total-items">{items.length}</p>
                            <h3 className="card-header text-lg font-medium">Item</h3>
                        </div>
                    </Link>

                    <Link to="/orders" className="card bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faShoppingCart} className="card-icon text-5xl mb-4" />
                        <div className="card-content text-center">
                            <p className="count text-3xl font-semibold" id="total-orders">0</p>
                            <h3 className="card-header text-lg font-medium">Place Order</h3>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}
