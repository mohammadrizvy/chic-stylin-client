import React from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/useProductDetails";
import Loader from "../Components/Loader/Loader";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import { StarIcon } from "@heroicons/react/24/solid";

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
          className="w-[400px]"
          src={product.image}
          alt={product.productName}
        />
      </div>
      {/* Details */}
      <div className="w-1/2 p-4">
        <div className="flex items-center"></div>
        <div className="">
        <p className="text-sm flex items-center gap-1 font-bold mt-2">
          <StarIcon className="size-4 text-black" />
          {product.rating}
        </p>
        </div>
        <h1 className="text-2xl font-bold">{product.productName}</h1>
        <h1 className="text-base">{product.description}</h1>
        <p className="text-lg mt-2">Price: ${product.price.toFixed(2)}</p>
        <p className="text-lg mt-2">Category: {product.category}</p>
      </div>
    </div>
  );
};
export default ProductDetails;
