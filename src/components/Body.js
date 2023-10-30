import { useState, useEffect } from "react";
import React from "react";
import Card from "./Card";
import ShimmerContent from "./ShimmerContent";
import { Link } from "react-router-dom";

const Body = () => {

    const [restaurants, setElements] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    async function fetchData() {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4510639&lng=78.3641341&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        setElements(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    useEffect(() => {
        fetchData();
    }, []);

    let searchFieldRef = React.createRef();
    const handleSearchFieldClick = () => {
        const text = searchFieldRef.current.value;
        const filteredRestaurants = restaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredRestaurants(filteredRestaurants);
    }

    {
        if (filteredRestaurants.length == 0)
            return <ShimmerContent />
    }

    return (
        <div className="body-div">
            <div className="filter-div">

                <div className="search-field">
                    <input ref={searchFieldRef} type="text"></input>
                    <button onClick={handleSearchFieldClick}>Search</button>
                </div>

                <div className="filter-btn">
                    <button onClick={() => {
                        setElements(restaurants.filter(restaurant => restaurant.info.avgRating > 4.0));
                    }}>
                        Get Top Restaurants
                    </button>
                </div>
            </div>


            <div className="card-container">
                {filteredRestaurants.map(restaurant => {
                    return (
                        <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}><Card key={restaurant.info.id} element={restaurant.info} /></Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Body;