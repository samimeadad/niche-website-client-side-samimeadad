import { Box } from '@mui/material';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import RegisterPageMain from './RegisterPageMain';

const Register = () => {
    return (
        <Box>
            <Header></Header>
            <RegisterPageMain></RegisterPageMain>
            <Footer></Footer>
        </Box>
    );
};

export default Register;