import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context-end-reducer/StoreContext'
import logo from '../assets/img/shopy.png'

const NavBar = () => {
    const { products } = useContext(StoreContext)
    return (                  
        <nav className="bg-indigo-900 text-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Shopy Logo" className="h-auto w-40 text-white " />
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Link to={'/'} className="hover:text-indigo-200 transition-colors duration-300">Home</Link>
                        <Link to={'/basket'} className="flex items-center hover:text-indigo-200 transition-colors duration-300">
                            Basket
                            <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {products.length}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar