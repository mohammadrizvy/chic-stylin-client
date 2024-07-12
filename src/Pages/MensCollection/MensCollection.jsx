import React, { useEffect, useState } from "react";
import CollectionsHeader from "../Components/CollectionsHeader/CollectionsHeader";
import { StarIcon } from "@heroicons/react/24/solid";
// import PaginationButton from "../Components/Pagination/PaginationButton/PaginationButton";
import { Helmet } from "react-helmet-async";
import useCollection from "../../Hooks/useCollection";
import { MyButton } from "../Components/MyButton/MyButton";
import PaginationButton from "../Components/Pagination/PaginationButton/PaginationButton";

const MensCollection = () => {
  const [collection, loading] = useCollection();

  const mensItem = collection.filter((item) => item.category === "Man");

  // ?This code won't be useable because we are using Hook Method
  // const [mensCollection , setMensCollections] = useState([])
  // useEffect(() =>  {
  //     fetch("collections.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //         const mensItems = data.filter((item) => item.category === "Man");
  //         setMensCollections(mensItems)
  //     } )
  // },[])
  // console.log(mensCollection);
  return (
    <div>
      <Helmet>
        <title>chic.stylin | Men's Collection</title>
      </Helmet>
      {/* Header of the mens collectons */}
      <div className="my-8">
        <CollectionsHeader
          title={"Men's Best Sellers"}
          link={"/"}
          button={"Home"}
        ></CollectionsHeader>
      </div>
      {/* All mens collections */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  mb-1 items-center justify-center gap-5">
        {mensItem.map((item) => (
          <div key={item.id} className="card card-compact w-80 mt-10 ">
            <figure className="h-80 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={item.image}
                alt={item.productName}
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                }}
              />
            </figure>
            <div className="card-body flex flex-col justify-between">
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
                <MyButton color="primary" className="text-white w-[50%]">
                  Add to cart
                </MyButton>
                <MyButton className=" w-[40%]">Buy Now</MyButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PaginationButton></PaginationButton>
    </div>
  );
};

export default MensCollection;
