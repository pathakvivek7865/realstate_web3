import React from "react";
import { FiSearch } from "react-icons/fi";
import { RxCaretDown } from "react-icons/rx";

const FilterInputs = () => {
    return (
        <div className="flex items-center justify-between w-full h-10 mt-6 text-sm font-semibold rounded-lg">
            {/* Search */}
            <div className="flex items-center w-3/12 h-full space-x-2 overflow-hidden rounded-lg bg-lightGray">
                <FiSearch className="ml-4 text-xl text-darkGray" />
                <input
                    className="w-full h-full pr-4 outline-none bg-lightGray text-textBlack"
                    placeholder="Enter an address, city, or zip code"
                />
            </div>

            {/* For Sale */}
            <div className="select-wrapper">
                <select className="select">
                    <option className="select-option" value="1">
                        For Sale
                    </option>
                    <option className="select-option" value="2">
                        For Rent
                    </option>
                </select>
                <RxCaretDown className="text-2xl font-bold text-textBlack" />
            </div>

            {/* Type */}
            <div className="select-wrapper">
                <div className="flex items-center pl-6">
                    <p>Type: </p>
                    <select className="pl-2 select">
                        <option className="select-option" value="1">
                            House
                        </option>
                        <option className="select-option" value="2">
                            For Rent
                        </option>
                    </select>
                </div>
                <RxCaretDown className="text-2xl font-bold text-darkGray" />
            </div>

            {/* Min Price */}
            <div className="select-wrapper">
                <div className="flex items-center pl-6">
                    <p className="whitespace-nowrap">Min Price: </p>
                    <select className="pl-2 select">
                        <option className="select-option" value="1">
                            $100k
                        </option>
                        <option className="select-option" value="2">
                            $200k
                        </option>
                    </select>
                </div>
                <RxCaretDown className="text-2xl font-bold text-darkGray" />
            </div>

            {/* Max Price */}
            <div className="select-wrapper">
                <div className="flex items-center pl-6">
                    <p className="whitespace-nowrap">Max Price: </p>
                    <select className="pl-2 select">
                        <option className="select-option" value="1">
                            $700k
                        </option>
                        <option className="select-option" value="2">
                            $900k
                        </option>
                    </select>
                </div>
                <RxCaretDown className="text-2xl font-bold text-darkGray" />
            </div>

            {/* Floor area */}
            <div className="select-wrapper">
                <div className="flex items-center pl-6">
                    <p className="whitespace-nowrap">Floor area: </p>
                    <select className="pl-2 select">
                        <option className="select-option" value="1">
                            60 m²
                        </option>
                        <option className="select-option" value="2">
                            80 m²
                        </option>
                    </select>
                </div>
                <RxCaretDown className="text-2xl font-bold text-darkGray" />
            </div>
        </div>
    );
};

export default FilterInputs;
