import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import logo from "../assets/images/Background-removebg-preview.png"
import { CartContext } from '../context/CartContext';
export const Header = () => {

    const { cartCount } = useContext(CartContext);

    return (
        <div className='bg-[#8e66ca] sticky top-0 z-50'>
            <div className=' container mx-auto '>
                <div className='flex justify-between items-center p-3'>
                    <Link to="/">
                        <img src={logo} alt='logo' className='w-full h-[60px]' />
                    </Link>
                    <div className='*:m-2 flex items-center'>
                        <Link to="/cart">
                            <div className="relative">
                                <FaShoppingCart className="text-4xl text-gray-700" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </Link>
                        <Link to="/checkout"><IoBagCheckOutline className='text-4xl' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;