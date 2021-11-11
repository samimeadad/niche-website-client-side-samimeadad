import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container sx={ { my: 10 } }>
            <Typography variant="h2" sx={ { textAlign: 'left', mb: 8, fontWeight: 'bold', color: '#CD5C5C' } }>About Us</Typography>
            <Box>
                <Typography variant="body1">

                    <h3>Affordable Quality Timepieces Online from <span style={ { color: '#CD5C5C', fontWeight: 900 } }>Watch Your Wrist</span> </h3>

                    <p>
                        Watch Your Wrist is a small company that is proud to be family owned and operated. Watch Your Wrist provides 100% authentic novel and interesting watches - the styles of which you will not find in your local jewelry store. Our watches come in many styles from Germany, Switzerland, Italy, the Islands, Far East and even sourced right here in the United States. Take a look around our company store, you are sure to find what you are looking for.
                    </p>

                    <p>
                        After the sale, you are always our customer. Our customer service is second to none. We strive to make sure you are satisfied with your purchase. We know how hard it is to purchase a watch over the internet, that is why we're proud to have a liberal, no questions asked return policy.
                    </p>


                    <p>
                        Watch Your Wrist is located on Uttara, Dhaka, Bangladesh. Please send any correspondence to:
                    </p>

                    <p>
                        Watch Your Wrist<br />
                        House# abc,<br />
                        Road# xyz,<br />
                        Sector# def,<br />
                        Uttara, Dhaka, Bangladesh<br />
                        (note this address is for mail only - it is not a storefront)
                    </p>

                    <p>
                        If you have any questions at all, be sure to contact us. We generally answer all e-mail inquiries within a few hours.

                    </p>
                    <p>
                        <strong style={ { color: 'blue' } }>sales@watchyourwrist.com</strong>
                    </p>
                </Typography>
            </Box>
        </Container>
    );
};

export default About;