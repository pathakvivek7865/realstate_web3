import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    });

    const containerStyle = {
        width: "`100%`",
        height: "100%",
    };

    // const center = useMemo(
    //     () => ({
    //         lat: 27.700769,
    //         lng: 85.30014,
    //     }),
    //     []
    // );

    const center = {
        lat: 27.700769,
        lng: 85.30014,
    };

    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center w-full h-screen rounded-2xl bg-lightGray">
                Loading...
            </div>
        );
    }

    return (
        <div className="w-full h-screen overflow-hidden rounded-2xl bg-lightGray">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
            ></GoogleMap>
        </div>
    );
};

export default Map;
