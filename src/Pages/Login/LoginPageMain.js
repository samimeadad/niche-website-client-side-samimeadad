import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import loginImage from '../../images/login.jpg';

const LoginPageMain = () => {
    const [ loginData, setLoginData ] = useState( {} );
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[ field ] = value;
        setLoginData( newLoginData );
        e.preventDefault();
    }

    const handleLoginFormSubmit = e => {
        loginUser( loginData.email, loginData.password, location, history );
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle( location, history );
    }

    return (
        <Container sx={ { my: 10 } }>
            <Grid container spacing={ 2 }>
                <Grid item sx={ { mt: 10 } } xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Typography sx={ { m: 1, color: '#3B4DA0', fontWeight: 'bold' } } variant="h4" gutterBottom component="div">
                        Please Login Here
                    </Typography>
                    <form onSubmit={ handleLoginFormSubmit }>
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="emailInput"
                            label="Your Email"
                            name="email"
                            onBlur={ handleOnChange }
                            variant="standard"
                        />
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="passwordInput"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={ handleOnChange }
                            variant="standard"
                        />
                        <Button
                            sx={ { width: 1, m: 1, backgroundColor: "#3B4DA0" } }
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Login
                        </Button>
                        <NavLink style={ { textDecoration: 'none' } } to="/register"><Button variant="text" sx={ { color: '#3B4DA0' } }>New User? Please Register Here</Button></NavLink>
                        { isLoading && <CircularProgress /> }
                        { user?.email && <Alert severity="success">User Logged-in Successfully!</Alert> }
                        { authError && <Alert severity="error">{ authError }</Alert> }
                    </form>
                    <Button onClick={ handleGoogleSignIn } variant="contained" sx={ { backgroundColor: '#3B4DA0', ml: 1, mt: 4 } }>Google Sign In</Button>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <img style={ { width: '100%' } } src={ loginImage } alt="loginImage" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default LoginPageMain;