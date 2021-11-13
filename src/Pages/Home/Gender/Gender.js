import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

//define the function for the buttons men and women watches.
const Gender = () => {
    return (
        <Container sx={ { my: 20 } }>
            <Typography variant="h3" sx={ { fontWeight: 'bold', mb: 8, textAlign: 'center', width: '50%', mx: 'auto' } }>Please Select Your Gender To Explore More</Typography>
            <Grid container spacing={ 2 } sx={ { textAlign: 'center' } }>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Link to="/menWatches" style={ { textDecoration: 'none' } }><Button variant="contained" color="secondary" sx={ { fontWeight: 'bold', fontSize: '1.5rem', px: 4, py: 4, backgroundColor: '#922B21' } }>Watches For Men</Button></Link>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Link to="/womenWatches" style={ { textDecoration: 'none' } }><Button variant="contained" color="success" sx={ { fontWeight: 'bold', fontSize: '1.5rem', px: 4, py: 4, backgroundColor: '#AF7AC5' } }>Watches For Women</Button></Link>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Gender;