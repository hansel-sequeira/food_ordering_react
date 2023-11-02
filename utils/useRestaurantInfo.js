import { useState, useEffect } from "react";
import { RESTAURANT_DETAIL_URL } from "./constants";

const useRestaurantInfo = (resId) => {
    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchRestaurantDetail();
    }, []);

    const fetchRestaurantDetail = async () => {
        const response = await fetch(RESTAURANT_DETAIL_URL + resId);
        const json = await response.json();
        setResData(json);
    }

    return resData;
}

export default useRestaurantInfo;