"use client";

import PropertyCard from "@components/cards/PropertyCard";
import { MdMoreHoriz } from "react-icons/md";
import FilterInputs from "@components/inputs/FilterInputs";
import Map from "@components/map/Map";

export default function Home() {
    return (
        <main className="mx-4 mb-16 text-textBlack lg:mx-16 ">
            <div className="sticky top-0 z-20 py-6 bg-white">
                <FilterInputs />
            </div>
            <div className="flex flex-col items-start w-full gap-10 justify-evenly lg:flex-row">
                {/* Left panel */}
                <div className="flex flex-col items-center justify-between w-full h-full max-h-screen lg:h-screen ">
                    {/* Cards grid */}
                    <div className="grid h-full w-full flex-1 grid-flow-row gap-6  pb-6 scrollbar-thin  scrollbar-track-lightGray  scrollbar-thumb-darkGray  sm:grid-cols-2 lg:h-[20rem]  lg:overflow-y-scroll  lg:pr-6 ">
                        <Cards />
                    </div>
                    {/* More Button */}
                    <button className="flex items-center px-4 py-2 mt-8 space-x-2 w-fit rounded-xl bg-lightGray">
                        <MdMoreHoriz className="text-2xl text-darkGray" />
                        <span className="ml-2">More</span>
                    </button>
                </div>
                {/* Map */}
                <div className="w-full aspect-square lg:w-10/12">
                    <Map />
                </div>
            </div>
        </main>
    );
}

import React from "react";

function Cards() {
    return (
        <>
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
