import React, { useContext, useState } from "react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthModal from "../authModal/AuthModal";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  cn,
} from "@nextui-org/react";

import { AuthContext } from "../../Providers/AuthProviders";
import { IoLogInSharp } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { LiaUserEditSolid } from "react-icons/lia";
import { MyButton } from "../Components/MyButton/MyButton";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
      })
      .catch(() => {
        toast.error("Can't log out");
      });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const navigateToProfile =() => {
    navigate("/profile")
  }

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <div className="border-b-2 border-black">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="navbar mt-5 flex items-center justify-between px-4">
        <div className="navbar-start flex items-center">
          <Link to="/">
            <p className="font-extrabold text-lg">chic.stylin</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex space-x-10">
          <a className="font-semibold text-sm">
            <Link to="/">Home</Link>
          </a>
          {/* {user?.displayName} */}
          <a className="font-semibold text-sm">
            <Link to="collection">Collection</Link>
          </a>
          <a className="font-semibold text-sm">Sell</a>
          <Link to="/discount">
            <a className="font-semibold text-sm">Discount</a>
          </Link>

          <a className="font-semibold text-sm">About</a>
          <a className="font-semibold text-sm">Contact</a>
          <a className="font-semibold text-sm">
            <ShoppingBagIcon className="h-6 w-6 text-black" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex space-x-4">
          <MyButton className="btn btn-ghost">Customer Supports</MyButton>

          <Dropdown backdrop="blur" className="shadow-2xl">
            <DropdownTrigger>
              <MyButton color="primary" size="md">
                Account
              </MyButton>
            </DropdownTrigger>
            <DropdownMenu
              variant="faded"
              aria-label="Dropdown menu with description"
            >
              <DropdownSection title="Actions" showDivider>
                {user ? null : (
                  <DropdownItem
                    key="new"
                    shortcut="⌘N"
                    description="Login to your account"
                    startContent={<IoLogInSharp className={iconClasses} />}
                    onClick={openModal}
                  >
                    Login
                  </DropdownItem>
                )}
                
                  {user ? (
                    
                    <DropdownItem
                      key="edit"
                      shortcut="⌘⇧E"
                      description="Manage your profie"
                      onClick={navigateToProfile}
                      startContent={
                        <LiaUserEditSolid className={iconClasses} />
                      }
                    >
                      Profile
                    </DropdownItem>
                  ) : null}
                
              </DropdownSection>
              {user ? (
                <DropdownSection title="Exit zone">
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    shortcut="⌘⇧D"
                    description="Log out your account"
                    onClick={handleLogOut}
                    startContent={
                      <TbLogout2 className={cn(iconClasses, "text-danger")} />
                    }
                  >
                    Logout
                  </DropdownItem>
                </DropdownSection>
              ) : null}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="lg:hidden  flex items-center">
          <ShoppingBagIcon className="h-8 w-8 text-black mb-2 mr-5 " />
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-5 px-4">
          <div className="flex flex-col space-y-4">
            <a className="font-semibold text-sm">
              <Link to="/">Home</Link>
            </a>
            <a className="font-semibold text-sm">
              <Link to="">Collection</Link>
            </a>
            <a className="font-semibold text-sm">
              <Link to="">Sell</Link>
            </a>
            <a className="font-semibold text-sm">
              <Link to="">Discount</Link>
            </a>
            <a className="font-semibold text-sm">
              <Link to="">About</Link>
            </a>
            <a className="font-semibold text-sm">
              <Link to="">Contact</Link>
            </a>
            <a className="font-semibold text-sm">
              <Link to="">Customer Supports</Link>
            </a>

            <button className="btn btn-ghost w-20 font-bold primary-button">
              <Link onClick={openModal}>Account</Link>
            </button>
          </div>
        </div>
      )}
      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
      <hr />
    </div>
  );
};

export default Navbar;
