import { Box, Typography } from '@mui/material';
import React from 'react';

const Payment = () => {
    return (
        <Box>
            <Typography variant="h4" sx={ { mb: 4 } }>Please pay here online</Typography>
            <Typography paragraph>
                The page is under development. As soon as we integrate to our online payment gateway, we will inform you accordingly. Please stay with us. Thanks for your kind patience.
            </Typography>
        </Box>
    );
};

export default Payment;