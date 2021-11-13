import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SelectedWatchMain from './SelectedWatchMain';

//after clicking the purchase button on each watch card, this page will be displayed. a user can place his/her order here
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