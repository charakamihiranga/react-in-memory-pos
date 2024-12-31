import {useContext, useState} from "react";
import {CustomerContext} from "../contexts/CustomerProvider.tsx";
import {Customer} from "../model/Customer.ts";
import {UpdateCustomer} from "./UpdateCustomer.tsx";

export function ViewCustomer() {
    const [customers, dispatch] = useContext(CustomerContext);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    function handleUpdate(customer: Customer) {
        setSelectedCustomer(customer);
    }
    function handleDelete(id: string) {
        dispatch({ type: "REMOVE_CUSTOMER", payload: id });
    }

    function handleSave(customer: Customer){
        dispatch({type: "UPDATE_CUSTOMER", payload: customer});
        setSelectedCustomer(null);
    }

    function handleClose(){
        setSelectedCustomer(null);
    }

    return (

        <div className="overflow-hidden bg-white rounded-lg p-4">
            {/* Column Headers */}
            <div className="grid grid-cols-4 gap-4 text-sm font-semibold mb-4 text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-lg shadow-md">
                <div className="text-center">Name</div>
                <div className="text-center">Email</div>
                <div className="text-center">Mobile</div>
                <div className="text-center">Actions</div>
            </div>

            {/* Customer Rows */}
            <div className={"overflow-y-auto h-[60vh] custom-scrollbar"}>
                {customers.map((customer: Customer, index: number) => (
                    <div key={index}
                         className={`grid grid-cols-4 gap-4 items-center p-2 bg-gray-100 mb-2 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg shadow-sm`}>
                        {/* Customer Data */}
                        <div className="text-center">{customer.name}</div>
                        <div className="text-center">{customer.email}</div>
                        <div className="text-center">{customer.mobile}</div>

                        {/* Actions */}
                        <div className="flex justify-center space-x-2">
                            {/* Update Button */}
                            <button
                                className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                onClick={() => handleUpdate(customer)}
                            >
                                Update
                            </button>

                            {/* Delete Button */}
                            <button
                                className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
                                onClick={() => handleDelete(customer.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedCustomer && (
                <UpdateCustomer
                    customer={selectedCustomer}
                    onClose={handleClose}
                    onSave={handleSave}
                />
            )}
        </div>



    );
}