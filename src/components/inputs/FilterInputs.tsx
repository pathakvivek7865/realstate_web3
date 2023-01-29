"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import SelectInput from "./SelectInput";

const FilterInputs = () => {
    const [isMapView, setIsMapView] = useState<boolean>(true);

    return (
        <div className="flex items-center justify-between w-full text-xs font-medium h-9 ">
            <div className="flex items-center justify-between w-full h-full space-x-6 lg:justify-start">
                {/* Search */}
                <div className="flex h-full w-full max-w-sm  items-center space-x-2 overflow-hidden rounded-lg bg-lightGray lg:w-[16rem]">
                    <FiSearch className="ml-3 text-xl text-darkGray" />
                    <input
                        className="w-full h-full pr-3 outline-none bg-lightGray text-textBlack placeholder:text-xs"
                        placeholder="Enter an address, city, or zip code"
                    />
                </div>

                {/* For Sale */}
                <div className="hidden lg:block">
                    <SelectInput
                        selectList={[
                            {
                                id: 1,
                                name: "buy",
                            },

                            {
                                id: 3,
                                name: "rent",
                            },
                        ]}
                        label={"For"}
                    />
                </div>

                {/* Type */}
                <div className="hidden lg:block">
                    <SelectInput
                        selectList={[
                            {
                                id: 1,
                                name: "house",
                            },
                            {
                                id: 2,
                                name: "appartment",
                            },
                            {
                                id: 3,
                                name: "land",
                            },
                        ]}
                        label={"Type: "}
                    />
                </div>

                {/* Min Price */}
                <div className="hidden lg:block">
                    <SelectInput
                        selectList={[
                            {
                                id: 1,
                                name: "50k - 100k",
                            },
                            {
                                id: 2,
                                name: "100k - 500k",
                            },
                            {
                                id: 3,
                                name: "200k - 1M",
                            },
                        ]}
                        label={"Price Range: "}
                    />
                </div>

                {/* Floor area */}
                <div className="hidden lg:block">
                    <SelectInput
                        selectList={[
                            {
                                id: 1,
                                name: "50 m²",
                            },
                            {
                                id: 2,
                                name: "60 m²",
                            },
                            {
                                id: 3,
                                name: "70 m²",
                            },
                        ]}
                        label={"Floor area: "}
                    />
                </div>

                {/* More */}
                <div className="relative select-wrapper">
                    <GoSettings className="pl-4 text-3xl font-bold text-darkGray" />
                    <div className="flex items-center pl-2">
                        <p className="whitespace-nowrap">More </p>
                    </div>

                    <div className="absolute -top-1 -right-1 flex animate-pulse items-center justify-center rounded-full border border-pink-600 bg-transparent p-[2px] transition duration-75 ">
                        <div className="h-1.5 w-1.5 rounded-full bg-pink-600 p-[1px] "></div>
                    </div>
                </div>
            </div>
            <div className="items-center justify-end hidden w-full lg:flex">
                <label
                    htmlFor="toggleB"
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <div className="relative ">
                        <input
                            onClick={() => setIsMapView(!isMapView)}
                            checked={true}
                            onChange={(e) => console.log(e.target.value)}
                            type="checkbox"
                            id="toggleB"
                            className="sr-only group"
                        />
                        <div className="block w-12 h-8 border rounded-full md:h border-primary "></div>
                        <div
                            className={`absolute  top-1.5 h-5 w-5 transform rounded-full duration-300   ${
                                isMapView
                                    ? "right-1.5 bg-primary"
                                    : "left-1.5 bg-gray-400"
                            }`}
                        ></div>
                    </div>
                    <p className="text-xs font-semibold">Map View</p>
                </label>
            </div>
        </div>
    );
};

export default FilterInputs;
