import { Box } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import BannerCarousel from '../Banner/BannerCarousel';
import Gender from '../Gender/Gender';
import PremiumWatches from '../PremiumWatches/PremiumWatches';
import Reviews from '../Reviews/Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <Box>
            <BannerCarousel></BannerCarousel>
            <Banner></Banner>
            <PremiumWatches></PremiumWatches>
            <Gender></Gender>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
        </Box>
    );
};

export default Home;