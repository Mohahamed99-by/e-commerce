import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import { storeData } from '../Data';
import Product from '../Components/Product';

const Home = () => {
    const [inputSearch, setInputSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const uniqueCategories = [...new Set(storeData.map(item => item.category))];
        setCategories(uniqueCategories);
    }, []);

    const handleChange = (e) => {
        setInputSearch(e.target.value);
    }

    const filterProduct = storeData.filter((data) => {
        const matchesCategory = selectedCategory ? data.category === selectedCategory : true;
        const matchesSearch = data.name.toLowerCase().includes(inputSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filter and Search Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-stretch gap-6">
                        {/* Search Box */}
                        <div className="w-full md:w-1/2">
                            <label htmlFor='search' className="block text-lg font-semibold text-gray-700 mb-2">
                                Search Product
                            </label>
                            <div className="relative">
                                <input 
                                    id='search'
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 transition duration-150 ease-in-out"
                                    type="text"
                                    value={inputSearch}
                                    onChange={handleChange}
                                    placeholder="Search by product name..."
                                />
                                <svg className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="w-full md:w-1/2">
                            <label htmlFor='category' className="block text-lg font-semibold text-gray-700 mb-2">
                                Filter by Category
                            </label>
                            <select
                                id='category'
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-gray-700 appearance-none transition duration-150 ease-in-out"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value=''>All Categories</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <main>
                    <h2 className='text-4xl font-bold text-gray-800 tracking-wide mb-8'>New In</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                        {filterProduct.length > 0 ? (
                            filterProduct.map((item) => (
                                <Product
                                    key={item.id}
                                    item={item}
                                />
                            ))
                        ) : (
                            <p className="text-center text-gray-600 text-xl col-span-full py-12">
                                No products found. Try adjusting your search or filter.
                            </p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;