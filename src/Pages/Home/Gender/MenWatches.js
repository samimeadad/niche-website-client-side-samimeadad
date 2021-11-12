import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import MenWatchesMain from './MenWatchesMain';

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