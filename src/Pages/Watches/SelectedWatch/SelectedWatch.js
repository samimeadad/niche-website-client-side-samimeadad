import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SelectedWatchMain from './SelectedWatchMain';

const SelectedWatch = () => {
    return (
        <Box>
            <Header></Header>
            <SelectedWatchMain></SelectedWatchMain>
            <Footer></Footer>
        </Box>
    );
};

export default SelectedWatch;