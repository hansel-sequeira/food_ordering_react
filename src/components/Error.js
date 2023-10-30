import { useRouteError } from "react-router-dom";

const Error = () => {
    const e = useRouteError();
    return (
        <div>
            <h2>Error - Status: {e.status}, {e.statusText}</h2>
        </div>
    )
}

export default Error;