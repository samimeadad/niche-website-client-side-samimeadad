import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BannerCarousel from '../Banner/BannerCarousel';
import Gender from '../Gender/Gender';
import PremiumWatches from '../PremiumWatches/PremiumWatches';
import Reviews from '../Reviews/Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';

//all the components of Home page is rendered here
const Home = () => {
    return (
        <Box>
            <Header></Header>
            <BannerCarousel></BannerCarousel>
            <Banner></Banner>
            <PremiumWatches></PremiumWatches>
            <Gender></Gender>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </Box>
    );
};

export default Home;