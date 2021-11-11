import { Box, Grid } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import image1 from '../../../images/banner-carousel/1.jpeg';
import image2 from '../../../images/banner-carousel/2.jpeg';
import image3 from '../../../images/banner-carousel/3.jpeg';
import image4 from '../../../images/banner-carousel/4.jpeg';
import image5 from '../../../images/banner-carousel/5.jpeg';
import image6 from '../../../images/banner-carousel/6.jpeg';


const BannerCarousel = () => {
    return (
        <Grid container spacing={ 2 }>
            <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
                <Box>
                    < Carousel >
                        <img src={ image1 } alt="carouselImage1" />
                        <img src={ image2 } alt="carouselImage2" />
                        <img src={ image3 } alt="carouselImage3" />
                        <img src={ image4 } alt="carouselImage4" />
                        <img src={ image5 } alt="carouselImage5" />
                        <img src={ image6 } alt="carouselImage6" />
                    </Carousel>
                </Box>
            </Grid >
        </Grid >

    );
};

export default BannerCarousel;