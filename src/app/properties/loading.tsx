import React from "react";

const loading = () => {
    return (
        <div className="w-full h-screen max-h-screen overflow-hidden">
            <div className="h-10 mt-6 rounded-xl bg-lightGray "></div>
            <div className="grid h-full gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="rounded-2xl bg-lightGray"></div>
                <div className="rounded-2xl bg-lightGray"></div>
                <div className="rounded-2xl bg-lightGray"></div>
                <div className="rounded-2xl bg-lightGray"></div>
                <div className="rounded-2xl bg-lightGray"></div>
                <div className="rounded-2xl bg-lightGray"></div>
                <div className="rounded-2xl bg-lightGray"></div>
                <div className="rounded-2xl bg-lightGray"></div>
            </div>
        </div>
    );
};

export default loading;
