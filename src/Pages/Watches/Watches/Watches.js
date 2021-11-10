import { Box, Typography } from '@mui/material';
import React from 'react';
import Watch from '../Watch/Watch';

const Watches = () => {
    return (
        <Box>
            <Typography variant="h2">All Watches Here</Typography>
            <Watch></Watch>
        </Box>
    );
};

export default Watches;