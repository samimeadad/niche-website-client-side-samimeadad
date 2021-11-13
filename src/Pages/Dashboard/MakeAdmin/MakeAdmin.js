import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [ email, setEmail ] = useState( '' );
    const role = 'admin';
    const [ success, setSuccess ] = useState( false );

    const handleOnBlur = e => {
        setEmail( e.target.value );
    }

    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = { email, role };
        console.log( user );
        fetch( 'https://damp-ridge-22727.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( user )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.modifiedCount ) {
                    setSuccess( true );
                    console.log( data );
                }
            } )
    }

    return (
        <Container style={ { textAlign: 'left' } }>
            <h2>Please input the Email Address</h2>
            <form onSubmit={ handleAdminSubmit }>
                <TextField
                    sx={ { width: '50%', marginRight: '2rem' } }
                    label="Your Email"
                    variant="standard"
                    type="email"
                    required
                    onBlur={ handleOnBlur }
                />
                <Button sx={ { marginTop: '10px', backgroundColor: 'orange' } } variant="contained" color="warning" type="submit">
                    Make Admin
                </Button>
            </form>
            { success && <Alert severity="success">User status changed to Admin Successfully!</Alert> }
        </Container >
    );
};

export default MakeAdmin;