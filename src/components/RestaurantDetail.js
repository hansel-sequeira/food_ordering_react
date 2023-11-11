import { useParams } from "react-router-dom";
import ShimmerContent from "./ShimmerContent";
import useRestaurantInfo from "../../utils/useRestaurantInfo";
import { RESTAURANT_MENU_IMAGE_URL } from "../../utils/constants";
import { useState } from "react";

const RestaurantDetail = () => {

    const { resId } = useParams();

    const resData = useRestaurantInfo(resId);

    const basicInfo = resData?.data?.cards[0]?.card?.card?.info;

    const [accordionState, setAccordionState] = useState(false);

    if (resData === null) {
        return (<ShimmerContent />)
    }


    const categories = resData.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    const triggerAccordion = () => {
        setAccordionState(!accordionState);
    }

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
                    const info = itemCategory.card.card;
                    const title = info.title;
                    const subCards = info.itemCards;
                    return (
                        <div key={title} className="border border-black my-2 mx-2 text-center bg-slate-100">
                            <div className="py-2 flex flex-row justify-between mx-2 hover:cursor-pointer" onClick={triggerAccordion}>
                                <h2 className="font-semibold">{title} ({subCards.length})</h2>
                                <span>⬇️</span>
                            </div>

                            {subCards.map(subCardItem => (
                                <div className="flex border border-blue-400 my-8 justify-between" key={subCardItem.card.info.id}>
                                    <div className="flex flex-col w-5/12 text-left ml-2">
                                        <div className="my-2 font-normal">{subCardItem.card.info.name} : ₹{subCardItem.card.info.defaultPrice ? subCardItem.card.info.defaultPrice / 100 : subCardItem.card.info.price / 100}</div>
                                        <div className="my-2 font-light">{subCardItem.card.info.description}</div>
                                    </div>

                                    <div className="w-4/12 flex flex-wrap justify-end">
                                        <img className="mt-2" src={RESTAURANT_MENU_IMAGE_URL + subCardItem.card.info.imageId}></img>
                                    </div>
                                </div>
                            ))}
                        </div>


                    )
                })}
            </div>

        </div>
    )
}


export default RestaurantDetail;