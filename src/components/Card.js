import { useContext } from "react";
import { BASE_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";


const enhancedCard = (props) => {
    return (
        <div>
            <label className="relative bg-black text-white p-1 rounded-lg left-3 top-9">Promoted</label>
            <Card element={props.element} />
        </div>
    )
}

export const HigherOrderComponent = () => {
    return enhancedCard;
}


const Card = (props) => {
    const { loggedInUser } = useContext(UserContext);
    const { name, avgRating, cuisines, sla, cloudinaryImageId } = props.element
    return (
        <div className="flex flex-col  bg-pink-200 w-80 m-5">
            <img className="h-64" src={BASE_URL +
                cloudinaryImageId}></img>
            <div className="card-content text-center my-2">
                <h2 className="font-bold my-2">{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{avgRating} stars</h4>
                <h4>{sla.deliveryTime} mins away</h4>
                <h5>{loggedInUser}</h5>
            </div>
        </div>
    )
}

export default Card;