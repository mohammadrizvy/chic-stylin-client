import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaUsersGear } from "react-icons/fa6";
import { RiListSettingsLine } from "react-icons/ri";
import { IoBagAddOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { LuContact } from "react-icons/lu";

import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, Outlet } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import BreadcrumbComponent from "../Pages/Shared/BreadcrumbComponent";

const Dashboard = () => {
  return (
    <div className="drawer w-full lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-10  ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content w-80 p-4 h-full ">
          <h1 className="text-large font-semibold text-center my-5">
            Admin Dashbaord
          </h1>
          <li>
            <Link to="/dashboard">
              <RxDashboard></RxDashboard>Main Dashbaord
            </Link>
          </li>
          <li>
            <Link to="/dashboard/all-users">
              <FaUsersGear></FaUsersGear>All Users
            </Link>
          </li>
          <li>
            <Link to="/dashboard/manage-items">
              <RiListSettingsLine></RiListSettingsLine>Manage Items
            </Link>
          </li>
          <li className="border-b-3 border-b-black pb-3">
            <Link to="/dashboard/add-items">
              <IoBagAddOutline></IoBagAddOutline>Add Items
            </Link>
          </li>
          <li>
            <Link to="/" className="flex w-full text-left mt-3 ">
              <LuHome></LuHome> Home
            </Link>
            <Link to="/" className="flex w-full text-left ">
              <LuShoppingBag></LuShoppingBag> Shop
            </Link>
            <Link to="/" className="flex w-full text-left ">
              <LuContact></LuContact> Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
