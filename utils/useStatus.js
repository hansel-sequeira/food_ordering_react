import { useEffect, useState } from "react";

const useStatus = () => {

    const [status, setStatus] = useState("Online");

    useEffect(() => {
        console.log("In use effect")
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