import { Box } from '@mui/material';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LoginPageMain from './LoginPageMain';

//Login page with header and footer
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