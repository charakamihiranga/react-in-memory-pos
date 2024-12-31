import { useState, useEffect } from "react";
import { Customer } from "../model/Customer";

export function UpdateCustomer({ customer, onClose, onUpdate }: {
    customer: Customer | null;
    onClose: () => void;
    onUpdate : (updatedCustomer: Customer) => void;
}) {
    const [name, setName] = useState(customer?.name || "");
    const [email, setEmail] = useState(customer?.email || "");
    const [mobile, setMobile] = useState(customer?.mobile || "");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (customer) {
            setIsVisible(true);
        }
    }, [customer]);

    function handleSave() {
        if (customer) {
            onUpdate({ ...customer, name, email, mobile });
        }
        onClose();
    }

    if (!customer) return null;

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
            <div className={`bg-white rounded-lg p-6 w-1/3 shadow-lg transform transition-transform duration-300 ${isVisible ? "scale-100" : "scale-90"}`}>
                <h2 className="text-lg font-semibold text-center mb-6">Update Customer</h2>
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
                        <label className="input-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                        />
                    </div>
                    <div>
                        <label className="input-label">Mobile</label>
                        <input
                            type="text"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="input"
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        className="update-button"
                        onClick={handleSave}
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
