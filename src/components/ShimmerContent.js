const ShimmerContent = () => {
    return (
        <div className="shimmer-container">

            <div className="flex ml-9 mt-8 mb-4 items-center">

                <div className="mx-2">
                    <input type="text" className="border border-black mx-3 px-2"></input>
                    <button className="bg-green-300 p-1 rounded-md hover:bg-green-400">Search</button>
                </div>

                <div className="mr-3 mx-20">
                    <button className="bg-cyan-100 p-1 rounded-md hover:bg-cyan-200">
                        Get Top Restaurants
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="bg-pink-200 w-80 h-80 m-5"></div>
                <div className="bg-pink-200 w-80 h-80 m-5"></div>
                <div className="bg-pink-200 w-80 h-80 m-5"></div>
                <div className="bg-pink-200 w-80 h-80 m-5"></div>
                <div className="bg-pink-200 w-80 h-80 m-5"></div>
                <div className="bg-pink-200 w-80 h-80 m-5"></div>
                <div className="bg-pink-200 w-80 h-80 m-5"></div>
                <div className="bg-pink-200 w-80 h-80 m-5"></div>
            </div>

        </div>
    )
}

export default ShimmerContent;