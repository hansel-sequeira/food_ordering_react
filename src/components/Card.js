import { BASE_URL } from "../../utils/constants";

const Card = (props) => {
    const { name, avgRating, cuisines, sla, cloudinaryImageId } = props.element
    return (
        <div className="card">
            <img className="card-img" src={BASE_URL +
                cloudinaryImageId}></img>
            <div className="card-content">
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{avgRating} stars</h4>
                <h4>{sla.deliveryTime} mins away</h4>
            </div>
        </div>
    )
}

export default Card;