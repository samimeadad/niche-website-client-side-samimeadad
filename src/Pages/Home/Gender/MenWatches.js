import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import MenWatchesMain from './MenWatchesMain';

//men watch component with header and footer
const MenWatches = () => {

    return (
        <Box>
            <Header></Header>
            <MenWatchesMain></MenWatchesMain>
            <Footer></Footer>
        </Box>
    );
};

export default MenWatches;