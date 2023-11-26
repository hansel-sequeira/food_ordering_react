import { useSelector } from "react-redux";
import { RESTAURANT_MENU_IMAGE_URL } from "../../utils/constants";


const Cart = () => {

    const subCards = useSelector(store => store.cart.cartItems);

    return (
        <div className="w-6/12 mx-auto">
            {
                subCards.map(subCardItem => (
                    <div className="flex border border-blue-400 my-8 justify-between" key={subCardItem.card.info.id}>
                        <div className="flex flex-col w-5/12 text-left ml-2">
                            <div className="my-2 font-normal">{subCardItem.card.info.name} : ₹{subCardItem.card.info.defaultPrice ? subCardItem.card.info.defaultPrice / 100 : subCardItem.card.info.price / 100}</div>
                            <div className="my-2 font-light">{subCardItem.card.info.description}</div>
                        </div>

                        <div className="w-4/12 flex flex-wrap justify-end">
                            <img className="mt-2" src={RESTAURANT_MENU_IMAGE_URL + subCardItem.card.info.imageId}></img>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart;