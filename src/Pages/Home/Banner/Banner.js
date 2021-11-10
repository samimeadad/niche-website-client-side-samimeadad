import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import bannerImage from '../../../images/bannerImage.jpeg'

const Banner = () => {
    return (
        <Grid container spacing={ 2 } sx={ { mt: 4 } }>
            <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                <Box sx={ { textAlign: 'center', width: '100%' } }>
                    <Typography variant="h3" sx={ { fontWeight: 'bold', color: '#2C3E50' } }>
                        Welcome to the new world of <span style={ { color: '#F4D03F' } }>Your Favorite Time Pieces</span>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                <img src={ bannerImage } alt="banner" />
            </Grid>
        </Grid >
    );
};

export default Banner;