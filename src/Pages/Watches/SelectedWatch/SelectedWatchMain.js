import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useWatches from '../../../Hooks/useWatches';

const SelectedWatchMain = () => {
    const { watchId } = useParams()
    const [ watches ] = useWatches();
    const { user } = useAuth();
    const history = useHistory();
    const clickedWatch = watches.find( watch => watch.id === watchId );

    const [ orderData, setOrderData ] = useState( {} );

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...orderData };
        newOrderData[ field ] = value;
        setOrderData( newOrderData );
        e.preventDefault();
    }

    const handlePlaceOrder = ( e ) => {
        fetch( 'http://localhost:5001/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( orderData )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.insertedId ) {
                    alert( 'Your order is placed successfully. Please wait for approval. Thank you.' );
                }
            } )
        e.preventDefault();
    }
    return (
        <Container sx={ { my: 10 } }>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Card sx={ { maxWidth: 345, maxHeight: "100%" } }>
                        <CardMedia
                            component="img"
                            image={ clickedWatch?.image }
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={ { fontWeight: 'bold', color: '#CD5C5C' } }>
                                { clickedWatch?.name }
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                { clickedWatch?.description.slice( 0, 150 ) }
                            </Typography>
                            <Typography variant="h5" sx={ { color: '#CD5C5C', fontWeight: 900, mt: 2 } }>
                                <span>USD </span>{ clickedWatch?.price }
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={ () => history.goBack() } variant="contained" color="error" sx={ { ml: 1, backgroundColor: '#CD5C5C' } }>Go Back</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Typography variant="h5" sx={ { color: '#CD5C5C', ml: 1, mb: 2, fontWeight: 'bold' } }>
                        Please submit the form to place the order
                    </Typography>
                    <form onSubmit={ handlePlaceOrder }>
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="nameInput"
                            type="text"
                            label="Your Name"
                            name="name"
                            defaultValue={ user?.displayName }
                            variant="standard"
                            required
                            onBlur={ handleOnBlur }
                        />
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="emailInput"
                            type="email"
                            label="Your Email"
                            name="email"
                            defaultValue={ user?.email }
                            variant="standard"
                            required
                            onBlur={ handleOnBlur }
                        />
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="watchNameInput"
                            label="Watch Name"
                            type="text"
                            name="watchName"
                            defaultValue={ clickedWatch?.name }
                            variant="standard"
                            required
                            onBlur={ handleOnBlur }
                        />
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="priceInput"
                            label="Price"
                            type="text"
                            name="price"
                            defaultValue={ clickedWatch?.price }
                            variant="standard"
                            required
                            onBlur={ handleOnBlur }
                        />
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="addressInput"
                            label="Your Address"
                            type="text"
                            name="address"
                            variant="standard"
                            required
                            onBlur={ handleOnBlur }
                        />
                        <TextField
                            sx={ { width: 1, m: 1 } }
                            id="phoneInput"
                            label="Your Phone Number"
                            type="text"
                            name="phone"
                            variant="standard"
                            required
                            onBlur={ handleOnBlur }
                        />
                        <Button
                            sx={ { width: 1, m: 1, backgroundColor: '#CD5C5C' } }
                            variant="contained"
                            color="error"
                            type="submit"
                        >Place Order</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SelectedWatchMain;