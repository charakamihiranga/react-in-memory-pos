import {ItemProvider} from "../contexts/ItemProvider.tsx";
import {AddItem} from "../components/AddItem.tsx";
import {ViewItem} from "../components/ViewItem.tsx";

export function Item() {
    return (
        <ItemProvider>
            <h1 className="px-6 md:px-28 pt-8 text-black font-bold text-2xl mb-6">Item Management</h1>
            <div className="px-6 md:px-28 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-1">
                    <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
                        <AddItem/>
                    </section>
                </div>
                <div className="col-span-1 h-full md:col-span-2 ">
                    <ViewItem/>
                </div>
            </div>
        </ItemProvider>
);
}