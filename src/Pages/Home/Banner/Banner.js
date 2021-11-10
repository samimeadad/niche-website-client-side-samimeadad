import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../images/bannerImage.jpeg'

const Banner = () => {
    return (
        <Grid container spacing={ 2 } sx={ { mt: 4 } }>
            <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                <Box sx={ { textAlign: 'center', width: '100%' } }>
                    <Box sx={ { mt: 4 } }>
                        <Typography variant="h1" sx={ { fontSize: '3.5rem', fontWeight: 'bold', color: "#17202A" } }>
                            Watch Your Wrist
                        </Typography>
                        <Typography variant="h5" sx={ { fontWeight: 'bold', color: "#CD5C5C" } }>
                            Time With Perfection
                        </Typography>
                    </Box>
                    <Box sx={ { my: 4 } }>
                        <Typography variant="h3" sx={ { fontWeight: 'bold', color: '#17202A' } }>
                            Welcome to the new world of <span style={ { color: '#CD5C5C' } }>Your Favorite Time Pieces</span>
                        </Typography>
                    </Box>
                    <Link to="/watches" style={ { textDecoration: 'none' } }><Button variant="contained" color="primary" sx={ { fontWeight: 'bold', fontSize: '1.5rem' } }>Show More Watches</Button></Link>
                </Box>
            </Grid>
            <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                <img src={ bannerImage } alt="banner" />
            </Grid>
        </Grid >
    );
};

export default Banner;