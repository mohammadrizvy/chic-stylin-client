import React from "react";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import TrustedBy from "../TrustedBy/TrustedBy";
import Collections from "../Collections/Collections";
import ContactUs from "../ContactUs/ContactUs";
import PopularCollections from "../../PopularCollections/PopularCollections";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> chic.stylin | Home </title>
      </Helmet>
      <Banner></Banner>
      {/* <Carousel></Carousel> */}
      <TrustedBy></TrustedBy>
      <Collections></Collections>
      <PopularCollections></PopularCollections>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
