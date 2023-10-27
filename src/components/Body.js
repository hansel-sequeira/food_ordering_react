import { gridElements } from "../../utils/mockData";
import Card from "./Card";

const Body = () => {
    return (
        <div className="body-div">
            <div className="search-bar">
                Search Bar
            </div>
            <div className="card-container">
                {gridElements.restaurants.map(restaurant => <Card key={restaurant.info.id} element={restaurant.info} />)}
            </div>
        </div>
    )
}

export default Body;