import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import WatchesMain from './WatchesMain';

//all watches page with header and footer
const Watches = () => {
    return (
        <Box>
            <Header></Header>
            <WatchesMain></WatchesMain>
            <Footer></Footer>
        </Box>
    );
};

export default Watches;