import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
import AboutUs from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantDetail from "./components/RestaurantDetail"

const AppContent = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}


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
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantDetail />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);