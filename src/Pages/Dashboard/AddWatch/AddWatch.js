import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddWatch = () => {
    const [ watchInfo, setWatchInfo ] = useState( {} );

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newWatchInfo = { ...watchInfo };
        newWatchInfo[ field ] = value;
        setWatchInfo( newWatchInfo );
        e.preventDefault();
    }

    console.log( watchInfo );

    const handleAddWatch = e => {
        fetch( 'https://damp-ridge-22727.herokuapp.com/watches', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( watchInfo )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.insertedId ) {
                    alert( 'New watch is added successfully. Thank you.' );
                }
            } )
        e.preventDefault();
    }

    return (
        <Container>
            <Typography variant="h4">Please input the watch information below to add a watch</Typography>
            <form onSubmit={ handleAddWatch }>
                <TextField
                    sx={ { width: 1, m: 1 } }
                    id="idInput"
                    type="text"
                    label="Watch Store Id"
                    name="id"
                    variant="standard"
                    required
                    onBlur={ handleOnBlur }
                />
                <TextField
                    sx={ { width: 1, m: 1 } }
                    id="nameInput"
                    type="text"
                    label="Watch Name"
                    name="name"
                    variant="standard"
                    required
                    onBlur={ handleOnBlur }
                />
                <TextField
                    sx={ { width: 1, m: 1 } }
                    id="description"
                    type="text"
                    label="Watch Description"
                    name="description"
                    variant="standard"
                    required
                    onBlur={ handleOnBlur }
                />
                <TextField
                    sx={ { width: 1, m: 1 } }
                    id="priceInput"
                    type="text"
                    label="Watch Price"
                    name="price"
                    variant="standard"
                    required
                    onBlur={ handleOnBlur }
                />
                <TextField
                    sx={ { width: 1, m: 1 } }
                    id="premiumStatus"
                    type="text"
                    label="Watch Status (premium: true/false)"
                    name="premium"
                    variant="standard"
                    required
                    onBlur={ handleOnBlur }
                />
                <TextField
                    sx={ { width: 1, m: 1 } }
                    id="genderInput"
                    type="text"
                    label="For Male or Female"
                    name="gender"
                    variant="standard"
                    required
                    onBlur={ handleOnBlur }
                />
                <TextField
                    sx={ { width: 1, m: 1 } }
                    id="imageInput"
                    type="text"
                    label="Watch Image URL"
                    name="image"
                    variant="standard"
                    required
                    onBlur={ handleOnBlur }
                />

                <Button
                    sx={ { width: 1, m: 1, backgroundColor: '#CD5C5C' } }
                    variant="contained"
                    color="error"
                    type="submit"
                >Add Watch</Button>
            </form>
        </Container>
    );
};

export default AddWatch;