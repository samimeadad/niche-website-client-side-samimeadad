import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


//function for private route and check whether the user is logged in or not
const PrivateRoute = ( { children, ...rest } ) => {
    const { user, isLoading } = useAuth();

    if ( isLoading ) {
        return <div className="text-center my-5"><CircularProgress color="error" /></div>
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