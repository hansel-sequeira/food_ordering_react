import { useDispatch } from "react-redux";
import { RESTAURANT_MENU_IMAGE_URL } from "../../utils/constants";
import { useState } from "react";
import { addToCart } from "../../utils/cartSlice";

const RestaurantMenuDetail = (props) => {
    const itemCategory = props.elt;
    const index = props.index;
    const setDefaultExpandedIndex = props.expandAccordionTrigger;
    const expandAccordion = props.expandAccordion;
    const info = itemCategory.card.card;
    const title = info.title;
    const subCards = info.itemCards;
    const currentIndex = props.currentIndex;


    //if the current index === newIndex, then setDefault(null)
    const expandAccordionTrigger = () => {
        if (currentIndex === index)
            setDefaultExpandedIndex(null)
        else setDefaultExpandedIndex(index);
    }

    const dispatch = useDispatch();

    const addToCartStore = (subCardItem) => {
        dispatch(addToCart(subCardItem))
    }

    return (
        <div>
            <div className="border border-black my-2 mx-2 text-center bg-slate-100" onClick={expandAccordionTrigger}>
                <div className="py-2 flex flex-row justify-between mx-2 hover:cursor-pointer">
                    <h2 className="font-semibold">{title} ({subCards.length})</h2>
                    <span>⬇️</span>
                </div>

                {expandAccordion && subCards.map(subCardItem => (
                    <div className="flex border border-blue-400 my-8 justify-between" key={subCardItem.card.info.id}>
                        <div className="flex flex-col w-5/12 text-left ml-2">
                            <div className="my-2 font-normal">{subCardItem.card.info.name} : ₹{subCardItem.card.info.defaultPrice ? subCardItem.card.info.defaultPrice / 100 : subCardItem.card.info.price / 100}</div>
                            <div className="my-2 font-light">{subCardItem.card.info.description}</div>
                        </div>

                        <div className="w-4/12 flex flex-wrap flex-col justify-end">
                            <img className="mt-2" src={RESTAURANT_MENU_IMAGE_URL + subCardItem.card.info.imageId}></img>
                            <button className="bg-black w-3/12 mx-auto text-white rounded-xl relative bottom-3" onClick={() => addToCartStore(subCardItem)}>Add +</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenuDetail;