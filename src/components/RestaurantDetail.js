import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RESTAURANT_DETAIL_URL, RESTAURANT_MENU_IMAGE_URL } from "../../utils/constants";
import ShimmerContent from "./ShimmerContent";

const RestaurantDetail = () => {

    const [resData, setResData] = useState(null);
    const { resId } = useParams();
    useEffect(() => {
        fetchRestaurantDetail();
    }, []);

    const fetchRestaurantDetail = async () => {
        const response = await fetch(RESTAURANT_DETAIL_URL + resId);
        const json = await response.json();
        setResData(json);
    }

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