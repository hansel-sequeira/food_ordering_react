const ShimmerContent = () => {
    return (
        <div className="shimmer-container">

            <div className="filter-div">

                <div className="search-field">
                    <input type="text"></input>
                    <button>Search</button>
                </div>

                <div className="filter-btn">
                    <button>
                        Get Top Restaurants
                    </button>
                </div>
            </div>

            <div className="card-container">
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
            </div>

        </div>
    )
}

export default ShimmerContent;