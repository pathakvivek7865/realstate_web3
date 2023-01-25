import React from "react";
import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import SelectInput from "./SelectInput";

const FilterInputs = () => {
    return (
        <div className="flex items-center justify-between w-full text-sm font-medium h-9 ">
            {/* Search */}
            <div className=" flex h-full  items-center space-x-2 overflow-hidden rounded-lg bg-lightGray lg:w-[18rem]">
                <FiSearch className="ml-4 text-xl text-darkGray" />
                <input
                    className="w-full h-full pr-4 outline-none bg-lightGray text-textBlack"
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
                            id: 2,
                            name: "sale",
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
                            name: "50k",
                        },
                        {
                            id: 2,
                            name: "100k",
                        },
                        {
                            id: 3,
                            name: "200k",
                        },
                    ]}
                    label={"Min Price: "}
                />
            </div>

            {/* Max Price */}
            <div className="hidden lg:block">
                <SelectInput
                    selectList={[
                        {
                            id: 1,
                            name: "300k",
                        },
                        {
                            id: 2,
                            name: "500k",
                        },
                        {
                            id: 3,
                            name: "1M",
                        },
                    ]}
                    label={"Max Price: "}
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
    );
};

export default FilterInputs;
