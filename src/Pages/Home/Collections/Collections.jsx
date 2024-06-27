import React from "react";
import shoe from "../../../assets/Category/10489.jpg";
import woman from "../../../assets/Category/17614.jpg";
import men from "../../../assets/Category/2147635503.jpg";
import watch from "../../../assets/Category/2149241142.jpg";
import CollectionsHeader from "../../Components/CollectionsHeader/CollectionsHeader";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const Collections = () => {
  return (
    <Element name="collection">
      <div className="py-20">
        {/* Header */}
        <CollectionsHeader
          title={
            <>
              Upgrade your Style <br /> with Our Weekly Collection
            </>
          }
          button={"Create a account"}
        ></CollectionsHeader>
        {/* Categories */}
        <div className="grid grid-cols-2 gap-14 mt-14">
          {/* Men's Collection */}
          <Link to="/mensCollection">
            <div
              className="card relative h-72  w-full bg-cover bg-center text-white"
              style={{
                backgroundImage: `url(${men})`,
              }}
            >
              <div className="card-body absolute bottom-0 left-0 right-0  p-4 rounded-lg">
                <h2 className="card-title text-3xl ml-8 font-bold">
                  Men's <br /> collection
                </h2>
              </div>
            </div>
          </Link>
          {/* Woman Collection */}
          <Link to="/womensCollection">
            <div
              className="card relative h-72  w-full bg-cover bg-center text-white"
              style={{
                backgroundImage: `url(${woman})`,
              }}
            >
              <div className="card-body absolute bottom-0 left-0 right-0  p-4 rounded-lg">
                <h2 className="card-title text-3xl font-bold">
                  Women's <br />
                  collection
                </h2>
              </div>
            </div>
          </Link>
          {/* Shoe Collection */}
          <Link to="/shoesCollection">
            <div
              className="card relative h-72  w-full bg-cover bg-center text-white"
              style={{
                backgroundImage: `url(${shoe})`,
              }}
            >
              <div className="card-body absolute bottom-0 left-0 right-0  p-4 rounded-lg">
                <h2 className="card-title text-3xl font-bold">
                  Shoes <br />
                  collection
                </h2>
              </div>
            </div>
          </Link>
          {/* Watch Collection */}
          <div
            className="card relative h-72  w-full bg-cover bg-center text-white"
            style={{
              backgroundImage: `url(${watch})`,
            }}
          >
            <div className="card-body absolute bottom-0 left-0 right-0  p-4 rounded-lg">
              <h2 className="card-title justify-end text-3xl font-bold">
                Watch <br />
                collection
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Collections;
