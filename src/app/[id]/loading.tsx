const loading = () => {
    return (
        <div className="mt-6 flex h-full w-full flex-col gap-4 overflow-hidden lg:h-[28rem] lg:flex-row lg:gap-6">
            <div className="h-full flex-[4]  overflow-hidden rounded-lg bg-lightGray lg:rounded-2xl"></div>
            <div className="flex    h-full  flex-[1] gap-6 lg:flex-col">
                <div className="flex-[1] overflow-hidden rounded-lg bg-lightGray lg:rounded-2xl"></div>
                <div className="flex-[1] overflow-hidden rounded-lg bg-lightGray lg:rounded-2xl"></div>
                <div className="relative flex-[1] cursor-pointer overflow-hidden rounded-lg bg-lightGray lg:rounded-2xl"></div>
            </div>
            <div className="mt-6 h-full flex-[2] rounded-2xl bg-lightGray lg:mt-0"></div>
        </div>
    );
};

export default loading;
