import React from "react";

import Image from "next/image";
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { GiPoland } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

interface PropertyCardProps {
    imageUrl: string;
    price: number;
    address: string;
    beds: number;
    baths: number;
    sqft: number;
    isFavourite?: boolean;
}

const PropertyCard = ({
    imageUrl,
    price,
    address,
    isFavourite,
    beds,
    baths,
    sqft,
}: PropertyCardProps) => {
    return (
        <Link
            href={`/${price}`}
            className="flex h-[18rem] w-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-md"
        >
            <div className="relative w-full overflow-hidden h-1/2 rounded-2xl bg-primary">
                <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={200}
                    className="h-[158px] w-full shrink-0 object-cover"
                />
                <div className="absolute z-10 flex items-center justify-between space-x-2 text-xs font-medium text-white top-3 left-3">
                    <div className="px-2 py-1 bg-green-500 rounded-md">New</div>
                    <div className="px-2 py-1 rounded-md bg-primary">
                        For Sale
                    </div>
                </div>
                <div className="absolute z-10 flex items-center justify-center p-1 bg-white rounded-md top-3 right-3">
                    <AiFillHeart
                        className={`text-2xl ${
                            isFavourite ? "text-pink-600" : "text-darkGray"
                        }`}
                    />
                </div>
            </div>
            <div className="p-4">
                <p className="text-lg font-bold">$ {price}</p>
                <p className="mt-1.5  max-h-10 overflow-hidden overflow-ellipsis text-sm font-medium text-darkGray">
                    {address}
                </p>
                <div className="grid grid-flow-col gap-2 mt-4">
                    <div className="flex items-center justify-center px-2 py-2 rounded-lg bg-lightGray">
                        <IoIosBed className="mr-3 text-xl text-orange-500" />
                        <p className="text-xs font-bold ">{beds}</p>
                    </div>
                    <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-lightGray">
                        <FaBath className="mr-3 text-lg text-primary" />
                        <p className="mt-1 text-xs font-bold">{baths}</p>
                    </div>
                    <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-lightGray">
                        <GiPoland className="mt-1 mr-3 text-lg text-green-500" />
                        <p className="mt-1 text-xs font-semibold">{sqft} m²</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
