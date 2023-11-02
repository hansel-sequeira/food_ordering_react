import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantDetail from "./components/RestaurantDetail"

const AppContent = () => (
    <div>
        <Header />
        <Outlet />
    </div>
)

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
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);