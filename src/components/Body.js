import { useState } from "react";
import Card from "./Card";
import { gridElements } from "../../utils/mockData";

const Body = () => {

    const [restaurants, setElements] = useState(gridElements.restaurants);

    return (
        <div className="body-div">
            <div className="filter-btn">
                <button onClick={() => {
                    setElements(restaurants.filter(restaurant => restaurant.info.avgRating > 4.0));
                }}>
                    Filter Top Restaurants
                </button>
            </div>
            <div className="card-container">
                {restaurants.map(restaurant => <Card key={restaurant.info.id} element={restaurant.info} />)}
            </div>
        </div>
    )
}

export default Body;