import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },

            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
        ]
    },
]);
export default myCreatedRoute;