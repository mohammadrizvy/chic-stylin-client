import React, { useContext, useState } from "react";
import CollectionsHeader from "../Components/CollectionsHeader/CollectionsHeader";
import { StarIcon } from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet-async";
import useCollection from "../../Hooks/useCollection";
import { MyButton } from "../Components/MyButton/MyButton";
import PaginationButton from "../Components/Pagination/PaginationButton/PaginationButton";
import Loader from "../Components/Loader/Loader";
import { AuthContext } from "../../Providers/AuthProviders";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import AuthModal from "../authModal/AuthModal";
import LazyLoad from "react-lazy-load";

const MensCollection = () => {
  const [collection, loading] = useCollection();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, , refetch] = useCart();
  const [isModalOpen, setModalOpen] = useState(false);

  const mensItem = collection.filter((item) => item.category === "Man");
  if (loading) {
    return <Loader></Loader>;
  }

  const handleAddToCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        cartId: item._id,
        productName: item.productName,
        email: user.email,
        price: item.price,
        productImage: item.image,
        rating: item.rating,
      };

      fetch("http://localhost:7000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast.success("Item added to cart");
          } else {
            Swal.fire({
              title: "Login required",
              text: "You need to login first to add item",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Login now",
            }).then((result) => {
              if (result.isConfirmed) {
                setModalOpen(true); // Show the modal
              }
            });
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          toast.error("Failed to add item to cart");
        });

      console.log(cartItem);
    } else {
      Swal.fire({
        title: "Login required",
        text: "You need to login first to add item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          setModalOpen(true); // Show the modal
        }
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>chic.stylin | Men's Collection</title>
      </Helmet>
      <div className="my-8">
        <CollectionsHeader
          title={"Men's Best Sellers"}
          link={"/"}
          button={"Home"}
        ></CollectionsHeader>
      </div>
      <Toaster></Toaster>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  mb-1 items-center justify-center gap-24">
        {mensItem.map((item) => (
          <div key={item.id} className=" card-compact w-80 mt-10">
            <figure className="h-80 overflow-hidden">
            <LazyLoad
              
              threshold={0.95}
              onContentVisible={() => {
                console.log("loaded!");
              }}
            >
              <img
                className="transform hover:scale-105 transition duration-300"
                src={item.image}
                alt={item.productName}
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                }}
              />
            </LazyLoad>
            </figure>
            <div className="card-body flex flex-col justify-between">
            <h2 className="card-title -mt-2">{item.productName}</h2>
              <p className="text-small -mt-3 ">{item.category}</p>
              <div className="flex -mt-1">
                <p className="text-small  font-semibold"> Tk {item.price}</p>
                <div className="flex items-center"> 
                  <StarIcon className="size-4 text-black" />
                  <StarIcon className="size-4 text-black" />
                  <StarIcon className="size-4 text-black" />
                  <StarIcon className="size-4 text-black" />
                  <p>({item.rating})</p>
                </div>
              </div>
              <div className="card-actions justify-center">
                <MyButton
                  size="sm"
                  onClick={() => handleAddToCart(item)}
                  color="primary"
                  className=" font-semibold w-[50%]"
                >
                  Add to cart
                </MyButton>
                <MyButton
                  color="secoundary"
                  variant="bordered"
                  size="sm"
                  className=" font-semibold w-[40%] "
                >
                  Buy Now
                </MyButton>
              </div>
            </div>
          </div>
        ))}
        <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
      <PaginationButton></PaginationButton>
    </div>
  );
};

export default MensCollection;
