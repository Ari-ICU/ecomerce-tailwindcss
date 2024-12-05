import React from 'react'
import { Link } from 'react-router-dom'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/images/Background-removebg-preview.png"

const Footer = () => {
    return (

        <footer className="bg-gray-900 text-white pt-12 pb-8 px-4">
            <div className="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
                <Link to="/" className="block mr-4 w-1/3">
                    <img src={logo} className="w-40 ml-4 lg:ml-0" alt="logo" />
                </Link>
                <div className="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
                    <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                        <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Product</li>
                        <li><Link to="/" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Features</Link></li>
                        <li><Link to="/" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Integrations</Link></li>
                        <li><Link to="/" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Pricing</Link></li>
                        <li><Link to="/" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">FAQ</Link></li>
                    </ul>
                    <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                        <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Company</li>
                        <li><Link to="/" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Privacy</Link>
                        </li>
                        <li><Link to="/" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Terms of Service</Link></li>
                    </ul>

                </div>
                <div className="text-gray-700 flex flex-col w-full">
                    <div className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Follow Us</div>
                    <div className="flex pl-4 justify-start mt-2">
                        <Link to="https://www.facebook.com/">
                            <CiFacebook className="size-7 flex items-center text-gray-300 hover:text-white mr-6 no-underline" />
                        </Link>
                        <Link to="https://x.com/home">
                            <CiTwitter className="size-7 flex items-center text-gray-300 hover:text-white mr-6 no-underline" />
                        </Link>
                        <Link to="https://github.com/Ari-ICU">
                            <FaGithub className="size-7 flex items-center text-gray-300 hover:text-white mr-6 no-underline" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-4 mt-4 text-gray-600 border-t border-gray-800 text-center"> © 2024 THOERUN RATHA, All rights reserved.</div>
        </footer >
    )
}

export default Footer