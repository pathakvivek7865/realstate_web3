import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className="mx-16 mt-6 flex w-full items-center ">
            <p className="w-2/12 text-2xl font-bold">RealEstate</p>
            <div className="flex w-10/12 items-center justify-between">
                <ul className="flex space-x-16 text-sm font-medium">
                    <li className="text-blue-500 underline">Search</li>
                    <li>About</li>
                    <li>Help</li>
                    <li>Real Estate Agents</li>
                </ul>

                <div className="flex items-center justify-end gap-x-16">
                    <AiFillHeart className="text-2xl text-gray-400" />
                    <div className="h-10 w-10 rounded-full bg-blue-200"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
