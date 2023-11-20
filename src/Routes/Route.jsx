import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Details from "../Pages/Details/Details";
import Error from "../Pages/Error/Error";

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
                errorElement: <Error></Error>,
                loader:()=>fetch('/donate.json'),
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/details/:id",
                element:<Details></Details>,
                loader:()=>fetch('/donate.json'),
            },

            {
                path:"/statistics",
                element:<Statistics></Statistics>,
                loader:()=>fetch('/donate.json'),
            },
        ]
    },
]);
export default myCreatedRoute;