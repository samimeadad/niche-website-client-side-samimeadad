import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


//function for private route and check whether the user is logged in or not
const PrivateRoute = ( { children, ...rest } ) => {
    const { user, isLoading } = useAuth();

    //define a circular progress element with Material UI while the data is being loaded
    if ( isLoading ) {
        return <Box sx={ { textAlign: 'center', my: 6 } }><CircularProgress color="error" /></Box>
    }

    //return the route to login if the user is not logged in
    return (
        <Route
            { ...rest }
            render={ ( { location } ) => user?.email ? children : <Redirect
                to={ {
                    pathname: "/login",
                    state: { from: location }
                } }
            ></Redirect>
            }
        ></Route>
    );
};

export default PrivateRoute;