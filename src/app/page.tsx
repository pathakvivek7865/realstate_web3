import PropertyCard from "@components/cards/PropertyCard";
import { MdMoreHoriz } from "react-icons/md";

export default function Home() {
    return (
        <main className="pb-16 mx-16 text-textBlack">
            <div className="w-full h-10 mt-4 rounded-lg bg-lightGray "></div>
            <div className="flex items-start w-full gap-10 mt-8 justify-evenly">
                <div className="flex flex-col items-center justify-center w-8/12 h-screen">
                    <div className="grid w-full grid-cols-2 gap-6">
                        <Cards />
                    </div>
                    <button className="flex items-center px-6 py-2 mt-8 space-x-2 w-fit rounded-xl bg-lightGray">
                        <MdMoreHoriz className="text-2xl text-darkGray" />
                        <span className="ml-2">More</span>
                    </button>
                </div>
                <div className="w-8/12 h-screen rounded-3xl bg-lightGray">
                    s
                </div>
            </div>
        </main>
    );
}

import React from "react";

export function Cards() {
    return (
        <>
            <PropertyCard
                imageUrl={
                    "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                price={699674}
                beds={2}
                baths={4}
                sqft={60}
                address={"1234 Main St, New York, NY 10001"}
                isFavourite
            />
            <PropertyCard
                imageUrl={
                    "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                price={699674}
                beds={2}
                baths={4}
                sqft={60}
                address={"1234 Main St, New York, NY 10001"}
            />
            <PropertyCard
                imageUrl={
                    "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                price={699674}
                beds={2}
                baths={4}
                sqft={60}
                address={"1234 Main St, New York, NY 10001"}
            />
            <PropertyCard
                imageUrl={
                    "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                price={699674}
                beds={2}
                baths={4}
                sqft={60}
                address={"1234 Main St, New York, NY 10001"}
            />
        </>
    );
}
