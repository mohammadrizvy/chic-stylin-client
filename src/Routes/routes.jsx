import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import MensCollection from "../Pages/MensCollection/MensCollection";
import WomensCollection from "../Pages/WomensCollection/WomensCollection";
import Login from "../Pages/authModal/AuthModal";
import Discount from "../Pages/Discount/Discount";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import BuyPage from "../Pages/BuyPage/BuyPage";
import Carts from "../Pages/Carts/Carts";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Dashboard from "../Layout/Dashboard";
import Orders from "../Pages/Orders/Orders";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import ProfileLayout from "../Layout/ProfileLayout";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";

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
        path: "/buy/:id",
        element: <BuyPage></BuyPage>,
      },
      {
        path: "/carts",
        element: <Carts></Carts>,
      },
      {
        path: "/check-out",
        element: <PrivateRoute>
          <CheckOut/>
        </PrivateRoute> ,
      },
      {
        path: "/discount",
        element: (
          <>
            <Discount></Discount>
          </>
        ),PrivateRoute
      },
      {
        path: "profile",
        element: <ProfileLayout/>,
        children: [
          {
            path: "",
            element: <UserProfile></UserProfile>,
          },
          {
            path: "orders",
            element: <Orders></Orders>,
          },
          {
            path: "payment-history",
            element: <PaymentHistory></PaymentHistory>,
          },
        ],
      },
    ],
  },
  {
    path : "dashboard",
    element : <Dashboard></Dashboard>,
    children : [
      {
        path : "all-users",
        element : <AllUsers/>
      },
      {
        path : "manage-items",
        element : <ManageItems/>
      },
      {
        path : "add-items",
        element : <AddItems/>
      },
    ]
  }
]);
