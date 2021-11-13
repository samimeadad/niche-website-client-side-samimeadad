import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

//subscribe and follow us section on the home page
const Subscribe = () => {
    return (
        <Container sx={ { my: 10, width: '100%', textAlign: 'center' } }>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Box sx={ { marginRight: 10 } }>
                        <Typography variant="h4" sx={ { fontWeight: 'bold', mb: 4, textAlign: 'left', color: '#CD5C5C' } }>Please Subscribe Here</Typography>
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 12 } sm={ 12 } md={ 8 } lg={ 8 }>
                                <form>
                                    <TextField id="outlined-basic" label="Please enter your email here" variant="outlined" fullWidth />
                                </form>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                                <Button variant="contained" color="primary" sx={ { px: 4, py: 2, backgroundColor: '#CD5C5C' } }>Subscribe</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Box>
                        <Typography variant="h4" sx={ { fontWeight: 'bold', mb: 4, textAlign: 'left', color: '#CD5C5C' } }>Please Follow Us on Social Media</Typography>
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
                                <Link to={ { pathname: "https://www.facebook.com/" } } target="_blank" rel="noreferrer"><Facebook sx={ { color: '#192895', marginRight: '1rem', fontSize: '4rem' } }></Facebook></Link>
                                <Link to={ { pathname: "https://www.twitter.com/" } } target="_blank" rel="noreferrer"><Twitter sx={ { color: 'skyblue', marginRight: '1rem', fontSize: '4rem' } }></Twitter></Link>
                                <Link to={ { pathname: "https://www.instagram.com/" } } target="_blank" rel="noreferrer"><Instagram sx={ { marginRight: '1rem', fontSize: '4rem' } }></Instagram></Link>
                                <Link to={ { pathname: "https://www.linkedin.com/" } } target="_blank" rel="noreferrer"><LinkedIn sx={ { color: '#192895', marginRight: '1rem', fontSize: '4rem' } }></LinkedIn></Link>
                                <Link to={ { pathname: "https://www.youtube.com/" } } target="_blank" rel="noreferrer"><YouTube sx={ { color: 'red', marginRight: '1rem', fontSize: '4rem' } }></YouTube></Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

        </Container >
    );
};

export default Subscribe;