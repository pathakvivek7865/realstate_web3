import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className="flex items-center w-full px-16 mt-4 ">
            <p className="w-3/12 text-2xl font-bold">RealEstate</p>
            <div className="flex items-center justify-between flex-1">
                <ul className="flex space-x-16 text-sm font-medium">
                    <li className="underline text-primary">Search</li>
                    <li>About</li>
                    <li>Help</li>
                    <li>Real Estate Agents</li>
                </ul>

                <div className="flex items-center justify-end space-x-16">
                    <AiFillHeart className="text-2xl text-gray-400" />
                    <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
