import {useContext, useState} from "react";
import {ItemContext} from "../contexts/ItemProvider.tsx";
import "../styles/App.css";
import {generateItemCode} from "../util/IdGenerator.ts";
export function AddItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [items,dispatch] = useContext(ItemContext);

    function handleSubmit() {
        dispatch({type: "ADD_ITEM", payload: {code: generateItemCode() ,name, price, quantity}});
    }

    return (
        <>
            <div className="mb-8 mt-4font-medium text-center ">
                <h1 className="text-xl font-semibold text-gray-800">Add Item</h1>
            </div>

            <div className="space-y-4">

                <div className="relative">
                    <label htmlFor="name" className="input-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="input"
                        placeholder="Enter item name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>


                <div>
                    <label htmlFor="email" className="input-label">Price</label>
                    <input
                        type="number"
                        id="price"
                        placeholder="Enter item price"
                        className="input"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>


                <div>
                    <label htmlFor="mobile" className="input-label">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        placeholder="Enter item quantity"
                        className="input"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        className="add-button"
                        onClick={handleSubmit}
                    >
                        Add Item
                    </button>
                </div>
            </div>
        </>
    );
}