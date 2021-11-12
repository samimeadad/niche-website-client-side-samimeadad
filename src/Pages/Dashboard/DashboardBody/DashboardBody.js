import { Box, Typography } from '@mui/material';
import React from 'react';

const DashboardBody = () => {
    return (
        <Box>
            <Typography variant="h4" sx={ { mb: 4 } }>Welcome to Your Dashboard</Typography>
            <Typography paragraph>
                You can go to your payment section, check your current orders, go to our review page and give a feedback about your experience with us. Thank you. Happy Watching!
            </Typography>
        </Box>
    );
};

export default DashboardBody;