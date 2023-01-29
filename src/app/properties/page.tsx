import PropertyCard from "@components/cards/PropertyCard";
import { MdMoreHoriz } from "react-icons/md";
import FilterInputs from "@components/inputs/FilterInputs";

export default async function Home() {
    // await for 3 second
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <main className="mb-16 text-textBlack ">
            <div className="sticky top-0 z-20 py-6 bg-white">
                <FilterInputs />
            </div>
            <div className="flex flex-col items-center justify-between w-full h-full">
                {/* Cards grid */}
                <div className=" grid h-full w-full flex-1 grid-flow-row flex-wrap gap-6 pb-4 sm:grid-cols-2 lg:h-[20rem] lg:grid-cols-3 xl:grid-cols-4">
                    <Cards />
                </div>
                {/* More Button */}
                <button className="flex items-center px-4 py-2 mt-8 space-x-2 w-fit rounded-xl bg-lightGray">
                    <MdMoreHoriz className="text-2xl text-darkGray" />
                    <span className="ml-2">More</span>
                </button>
            </div>
        </main>
    );
}

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
