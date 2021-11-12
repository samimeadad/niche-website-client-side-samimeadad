import { Box } from '@mui/material';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import AboutMainPage from './AboutMainPage';


const About = () => {
    return (
        <Box>
            <Header></Header>
            <AboutMainPage></AboutMainPage>
            <Footer></Footer>
        </Box>
    );
};

export default About;