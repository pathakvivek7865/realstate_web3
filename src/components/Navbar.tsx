import Image from "next/image";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav className="flex items-center w-full px-16 mt-4 ">
            <div className="flex items-center w-3/12">
                <BiBuildingHouse className="text-3xl text-primary" />
                <p className="text-2xl font-bold ">RealEstate</p>
            </div>
            <div className="flex items-center justify-between flex-1">
                <ul className="flex space-x-16 text-sm font-medium">
                    <li className="cursor-pointer text-primary">
                        <p>Search</p>
                        <div className="h-0.5  rounded-md bg-primary"></div>
                    </li>
                    <li className="cursor-pointer text-darkGray">About</li>
                    <li className="cursor-pointer text-darkGray">Help</li>
                    <li className="cursor-pointer text-darkGray">
                        Real Estate Agents
                    </li>
                </ul>

                <div className="flex items-center justify-end space-x-12">
                    <AiFillHeart className="text-2xl text-gray-400" />
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full">
                        <Image
                            className="object-cover w-full h-full rounded-full"
                            alt="prfile_picture"
                            src={
                                "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                            }
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
