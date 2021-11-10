import { Box } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import BannerCarousel from '../Banner/BannerCarousel';
import PremiumWatches from '../PremiumWatches/PremiumWatches';

const Home = () => {
    return (
        <Box>
            <BannerCarousel></BannerCarousel>
            <Banner></Banner>
            <PremiumWatches></PremiumWatches>
        </Box>
    );
};

export default Home;