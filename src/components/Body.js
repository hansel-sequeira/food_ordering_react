import { useState, useEffect, useContext } from "react";
import React from "react";
import Card, { HigherOrderComponent } from "./Card";
import ShimmerContent from "./ShimmerContent";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";

const Body = () => {

    const [restaurants, setElements] = useState([]);
    const { setUserNameUtility } = useContext(UserContext);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const EnhancedCard = HigherOrderComponent();
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

            <div className="flex ml-9 mt-8 mb-4 items-center">

                <div className="mx-2">
                    <input ref={searchFieldRef} type="text" className="border border-black mx-3 px-2"></input>
                    <button className="bg-green-300 p-1 rounded-md hover:bg-green-400" onClick={handleSearchFieldClick}>Search</button>
                </div>

                <div className="mr-3 mx-20">
                    <button className="bg-cyan-100 p-1 rounded-md hover:bg-cyan-200" onClick={() => {
                        setElements(restaurants.filter(restaurant => restaurant.info.avgRating > 4.0));
                    }}>
                        Get Top Restaurants
                    </button>
                </div>


                <div className="mr-3 mx-20">
                    <label name="render_name">Render name: </label>
                    <input className="border border-black px-2 py-1" name="render_name" onChange={(e) => {
                        setUserNameUtility(e.target.value);
                    }} />
                </div>
            </div>


            <div className="flex flex-wrap justify-center">
                {filteredRestaurants.map(restaurant => {
                    return (
                        restaurant.info.loyaltyDiscoverPresentationInfo !== null ?
                            <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}><EnhancedCard element={restaurant.info} /></Link> :
                            <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}><Card element={restaurant.info} /></Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Body;