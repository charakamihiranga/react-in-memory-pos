import {useContext, useState} from "react";
import {CustomerContext} from "../contexts/CustomerProvider.tsx";
import {generateCustomerID} from "../util/IdGenerator.ts";
import "../styles/customer.css";
import "../styles/App.css";

export function AddCustomer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [customers, dispatch] = useContext(CustomerContext);

    function handleSubmit() {
        dispatch({ type: "ADD_CUSTOMER", payload: {id: generateCustomerID(),name, email, mobile } });
    }


    return (
        <>
            <div className="mb-8 mt-4font-medium text-center ">
                <h1 className="text-xl font-semibold text-gray-800">Customer Registration</h1>
            </div>

            <div className="space-y-4">

                <div className="relative">
                    <label htmlFor="name" className="input-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="input"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>


                <div>
                    <label htmlFor="email" className="input-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>


                <div>
                    <label htmlFor="mobile" className="input-label">Mobile No.</label>
                    <input
                        type="number"
                        id="mobile"
                        placeholder="Enter your mobile number"
                        className="input"
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        className="add-button"
                        onClick={handleSubmit}
                    >
                        Add Customer
                    </button>
                </div>
            </div>
        </>

    );
}