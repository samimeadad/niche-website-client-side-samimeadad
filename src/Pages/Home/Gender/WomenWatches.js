import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import WomenWatchesMain from './WomenWatchesMain';

//women watch component with header and footer
const WomenWatches = () => {
    return (
        <Box>
            <Header></Header>
            <WomenWatchesMain></WomenWatchesMain>
            <Footer></Footer>
        </Box>
    );
};

export default WomenWatches;