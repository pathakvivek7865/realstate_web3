import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import NavListItem from "./NavListItem";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-full mt-4 lg:justify-start ">
            <Link href={"/"} className="flex items-center lg:w-3/12">
                <BiBuildingHouse className="text-3xl text-primary" />
                <p className="ml-1 text-2xl font-bold ">RealEstate</p>
            </Link>
            <div className="block lg:hidden">
                <RxHamburgerMenu className="text-3xl text-darkGray" />
            </div>
            <div className="items-center justify-between flex-1 hidden lg:flex">
                <ul className="flex space-x-16 text-sm font-medium">
                    <NavListItem title={"home"} href={"/"} />
                    <NavListItem title={"properties"} href={"/properties"} />
                </ul>

                <div className="flex items-center justify-end space-x-12">
                    <Link href={"/add-property"}>
                        <button className="">Add Property</button>
                    </Link>
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
