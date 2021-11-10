import { Box } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import BannerCarousel from '../Banner/BannerCarousel';

const Home = () => {
    return (
        <Box>
            <BannerCarousel></BannerCarousel>
            <Banner></Banner>
        </Box>
    );
};

export default Home;