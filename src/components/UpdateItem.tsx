import {Item} from "../model/Item.ts";
import {useEffect, useState} from "react";
import "../styles/App.css";

export function UpdateItem({item, onClose, onUpdate} : Readonly<{
    item: Item | null;
    onClose: () => void;
    onUpdate: (updatedItem: Item) => void;
}>) {

    const [name, setName] = useState(item?.name ?? "");
    const [price, setPrice] = useState(item?.price ?? 0 );
    const [quantity, setQuantity] = useState(item?.quantity ?? 0 );
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
       if (item) {
           setIsVisible(true);
       }
    }, [item]);

    function handleUpdate() {
        if (item) {
            onUpdate({...item, name, price, quantity});
        }
        onClose();
    }

    if (!item) return null;

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
            <div
                className={`bg-white rounded-lg p-6 w-1/3 shadow-lg transform transition-transform duration-300 ${isVisible ? "scale-100" : "scale-90"}`}>
                <h2 className="text-lg font-semibold text-center mb-6">Update Item</h2>
                <div className="space-y-4">
                    <div>
                        <label className="input-label">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input"
                        />
                    </div>
                    <div>
                        <label className="input-label">Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="input"
                        />
                    </div>
                    <div>
                        <label className="input-label">Quantity</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="input"
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        className="update-button"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                    <button
                        className="cancel-button"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}