import { Box } from '@mui/material';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import ErrorPageMain from './ErrorPageMain';

//Error page with header and footer
const ErrorPage = () => {
    return (
        <Box>
            <Header></Header>
            <ErrorPageMain></ErrorPageMain>
            <Footer></Footer>
        </Box>
    );
};

export default ErrorPage;