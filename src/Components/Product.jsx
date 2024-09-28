import { useContext, useState } from "react";
import { StoreContext } from "../context-end-reducer/StoreContext";

const Product = ({ item }) => {
    const { addToBasket } = useContext(StoreContext);
    const [stock, setStock] = useState(item.stock);

    const handleAdd = () => {
        if (stock > 0) {
            addToBasket(item);
            setStock(stock - 1);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-102 flex flex-col h-full">
            <div className="relative pb-[75%] overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
            </div>
            
            <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">{item.name}</h3>
                    <p className="text-2xl font-bold text-indigo-600 mb-2">${item.price.toFixed(2)}</p>
                    {stock > 0 ? (
                        <p className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full inline-block">
                            In Stock: {stock}
                        </p>
                    ) : (
                        <p className="text-sm font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full inline-block">
                            Out of Stock
                        </p>
                    )}
                </div>
                <button
                    type="button"
                    onClick={handleAdd}
                    disabled={stock === 0}
                    className={`w-full mt-4 py-2 px-4 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300
                    ${stock === 0 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'}`}
                >
                    {stock > 0 ? 'Add to basket' : 'Out of stock'}
                </button>
            </div>
        </div>
    );
};

export default Product;