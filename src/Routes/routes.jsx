import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main"
import MensCollection from "../Pages/MensCollection/MensCollection";
import WomensCollection from "../Pages/WomensCollection/WomensCollection";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children : [
        {
            path: "/",
            element : <Home></Home>
        },
        {
          path: "/mensCollection",
          element: <MensCollection></MensCollection>
        },
        {
          path: "/womensCollection",
          element: <WomensCollection></WomensCollection>
        }

    ]
  },
]);