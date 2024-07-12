import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import MensCollection from "../Pages/MensCollection/MensCollection";
import WomensCollection from "../Pages/WomensCollection/WomensCollection";
import Login from "../Pages/authModal/AuthModal";
import Discount from "../Pages/Discount/Discount";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/mensCollection",
        element: <MensCollection></MensCollection>,
      },
      {
        path: "/womensCollection",
        element: <WomensCollection></WomensCollection>,
      },
      {
        path: "/discount",
        element: (
          <PrivateRoute>
            <Discount></Discount>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element : <UserProfile></UserProfile>
      }
    ],
  },
]);
