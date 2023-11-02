import { useParams } from "react-router-dom";
import ShimmerContent from "./ShimmerContent";
import useRestaurantInfo from "../../utils/useRestaurantInfo";
import { RESTAURANT_MENU_IMAGE_URL } from "../../utils/constants";

const RestaurantDetail = () => {

    const { resId } = useParams();

    const resData = useRestaurantInfo(resId);

    const basicInfo = resData?.data?.cards[0]?.card?.card?.info;

    if (resData === null) {
        return (<ShimmerContent />)
    }
    return (
        <div>
            <div>
                <h2>{basicInfo.name}</h2>
                <h4>{basicInfo.cuisines.join(", ")}</h4>
                <h4>{basicInfo.areaName}, {basicInfo.sla.lastMileTravelString}</h4>
                <h5>{basicInfo.avgRatingString} stars | {basicInfo.totalRatingsString}</h5>
            </div>

            <div>

                {resData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(itemCard => {
                    return (
                        <div key={itemCard.card.info.id}>
                            {itemCard.card.info.name}
                            <img src={RESTAURANT_MENU_IMAGE_URL + itemCard.card.info.imageId}></img>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default RestaurantDetail;