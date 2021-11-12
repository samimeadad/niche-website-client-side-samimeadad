import { Box } from '@mui/material';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LoginPageMain from './LoginPageMain';

const Login = () => {
    return (
        <Box>
            <Header></Header>
            <LoginPageMain></LoginPageMain>
            <Footer></Footer>
        </Box>
    );
};

export default Login;