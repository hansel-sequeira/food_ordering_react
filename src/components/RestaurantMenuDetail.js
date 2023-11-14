import { RESTAURANT_MENU_IMAGE_URL } from "../../utils/constants";
import { useState } from "react";

const RestaurantMenuDetail = (props) => {
    const itemCategory = props.elt;
    const info = itemCategory.card.card;
    const title = info.title;
    const subCards = info.itemCards;

    const [accordionState, setAccordionState] = useState(true);

    const triggerAccordion = () => {
        console.log("Clicked")
        setAccordionState(!accordionState);
    }

    return (
        <div>
            <div className="border border-black my-2 mx-2 text-center bg-slate-100">
                <div className="py-2 flex flex-row justify-between mx-2 hover:cursor-pointer" onClick={triggerAccordion}>
                    <h2 className="font-semibold">{title} ({subCards.length})</h2>
                    <span>⬇️</span>
                </div>

                {accordionState && subCards.map(subCardItem => (
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
        </div>
    )
}

export default RestaurantMenuDetail;