import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const AdminRoute = ( { children, ...rest } ) => {
    const { user, isLoading, admin } = useAuth();

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