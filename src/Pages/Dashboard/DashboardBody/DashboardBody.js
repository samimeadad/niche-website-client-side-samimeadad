import { Box, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardBody = () => {
    const { admin } = useAuth();

    return (
        <Box>
            <Typography variant="h4" sx={ { mb: 4 } }>Welcome to Your Dashboard</Typography>
            {
                !admin ? <Typography paragraph variant="h6">
                    As an user, you can go to your payment section to pay online, check your current orders, go to our review page and give a feedback about your experience with us. Thank you. Happy Watching!
                </Typography>
                    :
                    <Typography paragraph variant="h6">
                        As an admin, you can make any email user as admin, add a new watch to database collection, remove a watch from database collection, manage all order by removing it permanently or modify the order status to shipped.
                    </Typography>
            }
        </Box>
    );
};

export default DashboardBody;