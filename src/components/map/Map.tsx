import React from "react";
import customMarkerImage from "public/next.svg";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

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
            <div className="flex items-center justify-center w-full rounded-2xl bg-lightGray lg:aspect-square lg:h-screen">
                Loading...
            </div>
        );
    }

    return (
        <div className="w-full overflow-hidden aspect-square rounded-2xl bg-lightGray lg:aspect-auto lg:h-screen xl:aspect-square">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
            >
                <CustomMarker />
            </GoogleMap>
        </div>
    );
};

export default Map;

const CustomMarker = () => {
    return (
        <Marker
            position={{
                lat: 27.700769,
                lng: 85.30014,
            }}
            icon={{
                url: customMarkerImage,
                scaledSize: new window.google.maps.Size(40, 40),
            }}
        />
    );
};
