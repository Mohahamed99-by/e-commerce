import React, { useContext } from 'react'
import NavBar from '../Components/NavBar'
import { StoreContext } from '../context-end-reducer/StoreContext'
import BasketBroduct from '../Components/BasketBroduct';

const Basket = () => {
    const {products, total } = useContext(StoreContext);
    console.log(total);
    

    return (
        <div className='min-h-screen bg-gray-100'>
            <NavBar />
            <div className='container mx-auto px-4 py-8'>
                <div className='bg-white shadow-md rounded-lg overflow-hidden'>
                    <div className='flex flex-col md:flex-row items-center justify-between p-6 bg-indigo-600 text-white'>
                        <h2 className='text-2xl font-bold mb-2 md:mb-0'>Your Basket</h2>
                        <p className='text-xl font-medium'>Total: ${total.toFixed(2)}</p>
                    </div>
                    <div className='divide-y divide-gray-200'>
                        {products.length === 0 ? (
                            <p className='p-6 text-center text-gray-500'>Your basket is empty</p>
                        ) : (
                            products.map((product) => (
                                <BasketBroduct 
                                    key={product.id}
                                    item={product}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket
