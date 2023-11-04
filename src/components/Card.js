import { BASE_URL } from "../../utils/constants";

const Card = (props) => {
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
            </div>
        </div>
    )
}

export default Card;