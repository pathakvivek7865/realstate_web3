import Map from "@/components/map/Map";
import Image from "next/image";
import React from "react";
import { FaBath } from "react-icons/fa";
import { GiPoland } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";

const PropertyDeatailPage = async () => {
    // await for 3 second
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <div className="mt-4 mb-8">
            {/* <h1 className="text-3xl font-bold">Appartment</h1> */}
            <div className="mt-6 flex h-full w-full flex-col gap-4 overflow-hidden lg:h-[28rem] lg:flex-row lg:gap-6">
                <div className="h-full flex-[4]  overflow-hidden rounded-lg bg-lightGray lg:rounded-2xl">
                    <Image
                        src={
                            "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg"
                        }
                        alt=""
                        width={600}
                        height={600}
                        className="object-cover w-full h-full shrink-0"
                    />
                </div>
                <div className="flex    h-full  flex-[1] gap-6 lg:flex-col">
                    <div className="flex-[1] overflow-hidden rounded-lg bg-lightGray lg:rounded-2xl">
                        <Image
                            src={
                                "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg"
                            }
                            alt=""
                            width={600}
                            height={600}
                            className="h-full p-0 m-0 obj ect-cover shrink-0"
                        />
                    </div>
                    <div className="flex-[1] overflow-hidden rounded-lg bg-lightGray lg:rounded-2xl">
                        <Image
                            src={
                                "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg"
                            }
                            alt=""
                            width={600}
                            height={600}
                            className="h-full p-0 m-0 obj ect-cover shrink-0"
                        />
                    </div>
                    <div className="relative flex-[1] cursor-pointer overflow-hidden rounded-lg bg-lightGray lg:rounded-2xl">
                        <Image
                            src={
                                "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg"
                            }
                            alt=""
                            width={600}
                            height={600}
                            className="h-full p-0 m-0 obj ect-cover shrink-0"
                        />
                        <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black opacity-70">
                            <p className="text-xs font-bold text-white lg:text-sm">
                                +10 Photos
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 h-full flex-[2] lg:mt-0">
                    <h6 className="-mt-1.5 text-2xl font-semibold">
                        Facilities
                    </h6>
                    <div className="flex gap-2 mt-1">
                        <div className="flex items-center justify-center py-2 pr-2 rounded-lg ">
                            <IoIosBed className="mr-3 text-xl text-orange-500" />
                            <p className="text-xs font-bold ">{2}</p>
                        </div>
                        <div className="flex items-center justify-center px-2 py-1 rounded-lg ">
                            <FaBath className="mr-3 text-lg text-primary" />
                            <p className="mt-1 text-xs font-bold">{4}</p>
                        </div>
                        <div className="flex items-center justify-center px-2 py-1 rounded-lg ">
                            <GiPoland className="mt-1 mr-3 text-lg text-green-500" />
                            <p className="mt-1 text-xs font-semibold">
                                {60} m²
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                        <div className="px-4 py-1 text-xs font-semibold rounded-2xl bg-lightGray text-textBlack">
                            Guest Toilet
                        </div>
                        <div className="px-4 py-1 text-xs font-semibold rounded-2xl bg-lightGray text-textBlack">
                            Garden Sharing
                        </div>
                        <div className="px-4 py-1 text-xs font-semibold rounded-2xl bg-lightGray text-textBlack">
                            Fittet Kitchen
                        </div>
                        <div className="px-4 py-1 text-xs font-semibold rounded-2xl bg-lightGray text-textBlack">
                            Kids Playground
                        </div>
                        <div className="px-4 py-1 text-xs font-semibold rounded-2xl bg-lightGray text-textBlack">
                            Mini Theater
                        </div>
                    </div>
                    <div className="mt-4 h-0.5 bg-lightGray"></div>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between mt-2">
                                <h6 className="text-lg font-normal ">
                                    Propety Types
                                </h6>
                                <p className="text-base font-light text-textBlack">
                                    Appartment
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <h6 className="text-lg font-normal ">
                                    Check In
                                </h6>
                                <p className="text-base font-light text-textBlack">
                                    01/01/2022
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                <h6 className="text-lg font-normal ">
                                    Duration
                                </h6>
                                <p className="text-base font-light text-textBlack">
                                    3 Days
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                <h6 className="text-lg font-normal ">
                                    Sales Tax
                                </h6>
                                <p className="text-base font-light text-textBlack">
                                    10%
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch justify-between">
                            <div className="mt-4 h-0.5 bg-lightGray"></div>
                            <div className="flex items-center justify-between mt-4">
                                <h6 className="text-lg font-bold ">Total</h6>
                                <p className="text-base font-bold text-textBlack">
                                    10 ETH
                                </p>
                            </div>
                            <button className="px-6 py-2 mt-4 text-lg font-semibold text-white rounded-lg shadow-md bg-primary">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex h-full w-full flex-col items-start gap-6 lg:h-[15rem] lg:flex-row">
                <div className="h-full w-full flex-[5] ">
                    {/* Description */}

                    <h6 className="mt-4 text-2xl font-bold ">Description</h6>
                    <p className="mt-6 text-lg font-medium text-darkGray">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugit et minus sapiente, fugiat reprehenderit enim
                        cum amet sint commodi perspiciatis hic, iure tenetur
                        voluptas? Corporis expedita a aut cupiditate ratione.
                    </p>
                </div>
                <div className="h-full w-full flex-[2] overflow-hidden rounded-2xl border border-darkGray border-opacity-25 ">
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default PropertyDeatailPage;
