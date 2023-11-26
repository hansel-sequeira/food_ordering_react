import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Cart from "./components/Cart"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantDetail from "./components/RestaurantDetail"
import UserContext from "../utils/UserContext"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"

const AppContent = () => {

    const [userName, setUserName] = useState(null);

    //auth logic

    useEffect(() => {
        //api call to validate the user
        setUserName("Hansel Sequeira");
    }, []);

    return (<div>
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserNameUtility: setUserName }}>
                <Header />
                <Outlet />
            </UserContext.Provider>
        </Provider>
    </div>)
}

const AboutUs = lazy(() => import("./components/About"));


const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContent />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h2>Loading...</h2>}><AboutUs /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantDetail />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);