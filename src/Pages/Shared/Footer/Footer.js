import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

//footer component
const Footer = () => {
    return (
        <footer style={ { backgroundColor: "#17202A" } }>
            <Box sx={ { mx: 5, px: 2, py: 3 } }>
                <Typography variant="h4" sx={ { textAlign: 'center', fontWeight: 'bold', color: 'yellow' } }>Watch Your Wrist</Typography>
                <Link to="/" style={ { display: 'flex', justifyContent: 'center', marginBottom: "2rem" } }><img style={ { width: "120px" } } src={ logo } alt="logoImage" /></Link>
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <Typography variant="6" sx={ { textAlign: 'center', fontWeight: 'bold', color: 'yellow' } }>Contact Us</Typography>
                        <p style={ { color: 'white' } }>Customer Service</p>
                        <p style={ { color: 'white' } }>Order Status</p>
                        <p style={ { color: 'white' } }>Trade-in Your Watch</p>
                        <p style={ { color: 'white' } }>Sell My Rolex</p>
                        <p style={ { color: 'white' } }>Sell My Watch</p>
                        <p style={ { color: 'white' } }>Become A Vendor</p>

                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <Typography variant="6" sx={ { textAlign: 'center', fontWeight: 'bold', color: 'yellow' } }>Company Info</Typography>
                        <p style={ { color: 'white' } }>About Watch Your Wrist</p>
                        <p style={ { color: 'white' } }>The Parlor: Our Blog</p>
                        <p style={ { color: 'white' } }>Affiliate Program</p>
                        <p style={ { color: 'white' } }>Authenticity Guarantee</p>
                        <p style={ { color: 'white' } }>Coupon Code</p>
                        <p style={ { color: 'white' } }>Student Discount</p>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                        <Typography variant="6" sx={ { textAlign: 'center', fontWeight: 'bold', color: 'yellow' } }>Help Center</Typography>
                        <p style={ { color: 'white' } }>Order Information</p>
                        <p style={ { color: 'white' } }>Shipping Option</p>
                        <p style={ { color: 'white' } }>International Shipping</p>
                        <p style={ { color: 'white' } }>Payment Options</p>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                        <Typography variant="6" sx={ { textAlign: 'center', fontWeight: 'bold', color: 'yellow' } }>Returns & Warranty</Typography>
                        <p style={ { color: 'white' } }>Return & Exchange Policy</p>
                        <p style={ { color: 'white' } }>Return Center</p>
                        <p style={ { color: 'white' } }>Warranty Policy</p>
                        <p style={ { color: 'white' } }>Warranty Registration</p>
                        <p style={ { color: 'white' } }>Sell My Watch</p>
                        <p style={ { color: 'white' } }>Warranty Repair Center</p>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                        <Typography variant="6" sx={ { textAlign: 'center', fontWeight: 'bold', color: 'yellow' } }>Customer Service</Typography>
                        <p style={ { color: 'white' } }>(+88) 01711 000000</p>
                        <p style={ { color: 'white' } }>House#123, Road#456, Sector#789</p>
                        <p style={ { color: 'white' } }>Uttara, Dhaka</p>
                        <p style={ { color: 'white' } }>Bangladesh</p>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
};

export default Footer;