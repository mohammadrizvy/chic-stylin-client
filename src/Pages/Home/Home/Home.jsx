import React from 'react';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import TrustedBy from '../TrustedBy/TrustedBy';
import Collections from '../Collections/Collections';
import ContactUs from '../ContactUs/ContactUs';
import PopularCollections from '../../PopularCollections/PopularCollections';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrustedBy></TrustedBy>
            <Carousel></Carousel>
            <Collections></Collections>
            <PopularCollections></PopularCollections>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;