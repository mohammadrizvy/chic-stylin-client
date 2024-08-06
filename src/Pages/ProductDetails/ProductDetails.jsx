import React from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/useProductDetails";
import Loader from "../Components/Loader/Loader";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import { StarIcon } from "@heroicons/react/24/solid";
import {Input} from "@nextui-org/react";
import { MyButton } from "../Components/MyButton/MyButton";


const ProductDetails = () => {
  const { id } = useParams();
  console.log(`Product ID from URL: ${id}`);
  const { product, isLoading, error } = useProductDetails(id);

  if (isLoading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  console.log("Product data:", product);

  return (
    <div className="flex p-4">
      {/* Image */}
      <div className="w-1/2 flex justify-center items-center">
        <img
          className="w-[500px]"
          src={product.image}
          alt={product.productName}
        />
      </div>
      {/* Details */}
      <div className="w-1/2 p-4">
        {/* Reviews and ratins */}
        <div className="flex items-center mb-3 gap-2">
          <p className="text-sm flex items-center gap-1 font-bold">
            <StarIcon className="size-4 text-black" />
            {product.rating}
          </p>
          <p className="text-sm">{product?.reviews?.length || "69"} Reviews</p>
        </div>

        {/* Product details */}
        <h1 className="text-3xl font-bold">{product.productName}</h1>
        <h1 className="text-base  mt-2">{product.description}</h1>
        <p className="text-lg mt-2 font-bold">TK {product.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <p className="text-sm font-semibold mr-2 ">Category:</p>{" "}
          <span className="text-sm font-semibold text-gray-500">{product.category}</span>
        </div>
        <div className="flex mt-4 items-center">
        <div className=" w-[200px] mr-6">
          <Input
            variant="bordered"
            key="email-input"
            type="email"
            label="QTY"
            labelPlacement="outside"
           radius="none"
            description="Your Quantity"
          />
        </div>
        <MyButton color="primary" size="md" className=" text-white">
            Add to cart
          </MyButton>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
