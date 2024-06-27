import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import image1 from "../../../assets/Banner/portrait-young-man-yellow-scene2222222.jpg"
import image2 from "../../../assets/Banner/portrait-young-man-yellow-scene11111.jpg"

const Banner = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center font-semibold text-6xl ">
        Upgrade Your Waredrobe With Our <br /> Fresh Take On Street Fashion
      </h1>
      {/* Cards */}
      <div className=" flex justify-center space-x-8  mt-20 mb-20">
        {/* Card 1 */}
        <div
          className="card relative h-72  w-full bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        >
          <div className="card-body absolute bottom-0 left-0 right-0  p-4 rounded-lg">
            <h2 className="card-title text-2xl font-semibold">
              Chic Streetwear
            </h2>
            <p className="mt-auto">
              Discover the perfect blend of comfort and trendsetting fashion
              with our.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className="card relative h-72  w-full bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${image2})`,
          }}
        >
          <div className="card-body absolute bottom-0 left-0 right-0  p-4 rounded-lg">
            <h2 className=" text-2xl font-semibold">Urban Elegance</h2>
            <p className="mt-auto">
              Dive into the latest trends with our curated selection of street
              fashion essentials.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className=" h-72 w-full">
          <p className=" mb-3 text-base">
            Stay on top of the streetwear trends with our new collection.
            Featuring a range of must-have pieces,
            <br />
            form stylish sneakers to <br />
            statement jackets
          </p>
          <button class="btn primary-button mt-3 mb-3">
            Explore now <ArrowLongRightIcon class="size-6 text-black" />
          </button>
          <br />
          <button class="btn secondary-button text-white">
            Create a account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

