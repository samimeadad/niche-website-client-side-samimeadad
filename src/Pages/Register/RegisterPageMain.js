import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import registerImage from '../../images/register.jpg';


//define the register function with user and password. 
const RegisterPageMain = () => {
    const [ registerData, setRegisterData ] = useState( {} );
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[ field ] = value;
        setRegisterData( newRegisterData );
        e.preventDefault();
    }

    const handleRegisterFormSubmit = e => {
        if ( registerData.password !== registerData.passwordConfirm ) {
            e.preventDefault();
            alert( 'Password Not Matched' );
            return;
        }
        else {
            registerUser( registerData.email, registerData.password, registerData.name, history );
        }
        e.preventDefault();
    }
    return (
        <Container sx={ { my: 10 } }>
            <Grid container spacing={ 2 }>
                <Grid item sx={ { mt: 10 } } xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Typography sx={ { m: 1, color: '#CD5C5C', fontWeight: "bold" } } variant="h4" gutterBottom component="div">
                        Please Register Here
                    </Typography>
                    { !isLoading && <form onSubmit={ handleRegisterFormSubmit }>
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="name-input"
                            type="text"
                            label="Your Name"
                            name="name"
                            onBlur={ handleOnBlur }
                            variant="standard"
                        />
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="email-input"
                            type="email"
                            label="Your Email"
                            name="email"
                            onBlur={ handleOnBlur }
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={ handleOnBlur }
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="password-confirm"
                            label="Confirm Password"
                            type="password"
                            name="passwordConfirm"
                            onBlur={ handleOnBlur }
                            variant="standard"
                            required
                        />
                        <Button
                            sx={ { width: 1, m: 1, backgroundColor: '#CD5C5C' } }
                            variant="contained"
                            color="error"
                            type="submit"
                        >Register</Button>
                        <NavLink style={ { textDecoration: 'none' } } to="/login"><Button variant="text" sx={ { color: '#CD5C5C' } }>Already Registered? Please Login</Button></NavLink>
                        { isLoading && <CircularProgress /> }
                        { user?.email && <Alert severity="success">User Created Successfully!</Alert> }
                        { authError && <Alert severity="error">{ authError }</Alert> }
                    </form> }

                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <img style={ { width: '100%' } } src={ registerImage } alt="loginImage" />
                </Grid>

            </Grid>
        </Container >
    );
};

export default RegisterPageMain;