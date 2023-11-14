import { useParams } from "react-router-dom";
import ShimmerContent from "./ShimmerContent";
import useRestaurantInfo from "../../utils/useRestaurantInfo";
import RestaurantMenuDetail from "./RestaurantMenuDetail";

const RestaurantDetail = () => {

    const { resId } = useParams();

    const resData = useRestaurantInfo(resId);

    const basicInfo = resData?.data?.cards[0]?.card?.card?.info;

    if (resData === null) {
        return (<ShimmerContent />)
    }


    const categories = resData.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    return (
        <div className="flex flex-col items-center mt-10">
            <div className="text-center mb-10">
                <h2 className="font-extrabold mb-2">{basicInfo.name}</h2>
                <h4>{basicInfo.cuisines.join(", ")}</h4>
                <h4>{basicInfo.areaName}, {basicInfo.sla.lastMileTravelString}</h4>
                <h5>{basicInfo.avgRatingString} stars | {basicInfo.totalRatingsString}</h5>
            </div>

            <div className="w-8/12">
                {categories.map(itemCategory => {
                    return (
                        <RestaurantMenuDetail key={itemCategory.card.card.title} elt={itemCategory} />
                    )
                })}
            </div>

        </div>
    )
}


export default RestaurantDetail;