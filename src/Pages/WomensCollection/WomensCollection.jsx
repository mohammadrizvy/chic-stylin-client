import React, { useEffect, useState } from "react";
import CollectionsHeader from "../Components/CollectionsHeader/CollectionsHeader";
import { StarIcon } from "@heroicons/react/24/solid";
import PaginationButton from "../Components/PaginationButton/PaginationButton";

const WomensCollection = () => {
  const [womensCollection, setWomensCollection] = useState([]);
  useEffect(() => {
    fetch("collections.json")
      .then((res) => res.json())
      .then((data) => {
        const womensItems = data.filter((item) => item.category === "Woman");
        setWomensCollection(womensItems);
      });
  }, []);
  console.log(womensCollection);
  return (
    <div>
      {/* Header */}
      <div className="my-12">
        <CollectionsHeader
          title={"Women's Best Sellers"}
          link={"/"}
          button={"Home"}
        ></CollectionsHeader>
      </div>
      {/* All Womens collections */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center justify-center gap-5 mb-10">
        {womensCollection.map((item) => (
          <div key={item.id} className="card card-compact w-96 mt-20">
            <figure className="h-96 overflow-hidden">
              <img
                src={item.image}
                alt={item.productName}
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.productName}</h2>
              <div className="flex">
                <p>${item.price} USD</p>
                <div className="flex items-center">
                  <StarIcon class="size-4 text-black" />
                  <StarIcon class="size-4 text-black" />
                  <StarIcon class="size-4 text-black" />
                  <StarIcon class="size-4 text-black" />
                  <StarIcon class="size-4 text-black" />

                  <p>({item.rating})</p>
                </div>
              </div>

              <div className="card-actions justify-center">
                <button className="btn secondary-button text-white w-[50%]">
                  Add to cart
                </button>
                <button className="btn primary-button w-[40%]">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PaginationButton></PaginationButton>
    </div>
  );
};

export default WomensCollection;
