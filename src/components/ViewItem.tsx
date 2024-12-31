import {useContext, useState} from "react";
import {ItemContext} from "../contexts/ItemProvider.tsx";
import {Item} from "../model/Item.ts";
import {UpdateItem} from "./UpdateItem.tsx";

export function ViewItem() {
    const [items, dispatch] = useContext(ItemContext);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    function handleOpenUpdatePopup(item: Item) {
        setSelectedItem(item);
    }

    function handleDelete(code: string){
        dispatch({type: "REMOVE_ITEM", payload: code});
    }

    function handleUpdate(item: Item){
        dispatch({type: "UPDATE_ITEM", payload: item});
        setSelectedItem(null);
    }

    function handleClose(){
        setSelectedItem(null);
    }

    return (
        <div className="overflow-hidden bg-white rounded-lg p-4">
            {/* Column Headers */}
            <div
                className="grid grid-cols-4 gap-4 text-sm font-semibold mb-4 text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-lg shadow-md">
                <div className="text-center">Name</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-center">Actions</div>
            </div>

            {/* Item Rows */}
            <div className={"overflow-y-auto h-[60vh] custom-scrollbar"}>
                {items.map((item: Item, index: number) => (
                    <div key={index}
                         className={`grid grid-cols-4 gap-4 items-center p-2 bg-gray-100 mb-2 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg shadow-sm`}>
                        {/* Customer Data */}
                        <div className="text-center">{item.name}</div>
                        <div className="text-center">{item.price}</div>
                        <div className="text-center">{item.quantity}</div>

                        {/* Actions */}
                        <div className="flex justify-center space-x-2">
                            {/* Update Button */}
                            <button
                                className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                onClick={() => handleOpenUpdatePopup(item)}
                            >
                                Update
                            </button>

                            {/* Delete Button */}
                            <button
                                className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
                                onClick={() => handleDelete(item.code)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedItem && (
                <UpdateItem
                    item={selectedItem}
                    onClose={handleClose}
                    onUpdate={handleUpdate}
                />
            )}
        </div>

    );
}