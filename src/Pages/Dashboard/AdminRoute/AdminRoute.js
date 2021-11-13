import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

//Define the function for admin route component
const AdminRoute = ( { children, ...rest } ) => {
    const { user, isLoading, admin } = useAuth();

    //define the circular progress with Material UI while the data is being loaded
    if ( isLoading ) {
        return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress />
        </Box>
    }
    return (
        <Route
            { ...rest }
            render={ ( { location } ) =>
                user?.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={ {
                            pathname: "/",
                            state: { from: location }
                        } }
                    />
                )
            }
        />
    );
};

export default AdminRoute;