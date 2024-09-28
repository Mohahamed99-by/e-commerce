import { useContext, useState } from "react";
import { StoreContext } from "../context-end-reducer/StoreContext";
import Modal from "./Modal";

const BasketProduct = ({ item }) => {
    const { removeFromBasket } = useContext(StoreContext);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleRemove = () => {
        setModalOpen(true);
    };

    const handleConfirmRemove = () => {
        removeFromBasket(item);
        setModalOpen(false);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto">
                    <img
                        className="w-32 h-32 object-cover rounded-md"
                        src={item.image}
                        alt={`${item.name} glasses`}
                    />
                    <div className="text-center sm:text-left flex flex-col justify-center">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-xl font-bold text-indigo-600">${item.price.toFixed(2)}</p>
                    </div>
                </div>
                <div className="mt-4 sm:mt-0 w-full sm:w-auto">
                    <button
                        className="w-full sm:w-auto bg-red-500 text-white text-sm font-medium rounded-md py-2 px-4 hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        onClick={handleRemove}
                    >
                        Remove from basket
                    </button>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmRemove}
                itemName={item.name}
            />
        </div>
    );
};

export default BasketProduct;