import React, { useEffect, useState } from "react";
import CollectionsHeader from "../Components/CollectionsHeader/CollectionsHeader";
import { StarIcon } from "@heroicons/react/24/solid";
import { MyButton } from "../Components/MyButton/MyButton";

const PopularCollections = () => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    fetch("collections.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItesm = data.filter((item) => item.category === "Popular");
        setCollection(popularItesm);
      });
  }, []);

  console.log(collection);

  return (
    <div>
      <CollectionsHeader
        title={
          <>
            Our Best <br /> Popular Collections item
          </>
        }
        button={"Create an account"}
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-5">
        {collection.map((item) => (
          <div key={item.id} className="card card-compact w-80 mt-20">
            <figure className="h-80 overflow-hidden ">
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
                <MyButton color="primary" className=" w-[50%]">
                  Add to cart
                </MyButton>
                <MyButton  className=" w-[40%] ">Buy Now</MyButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCollections;
