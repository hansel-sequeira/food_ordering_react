import { useEffect, useState } from "react";

const useStatus = () => {

    const [status, setStatus] = useState("Online");

    useEffect(() => {
        window.addEventListener("online", (event) => {
            setStatus("Online");
        });

        window.addEventListener("offline", (event) => {
            setStatus("Offline");
        })
    }, [])


    return status;
}

export default useStatus;