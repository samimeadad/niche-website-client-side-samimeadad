import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useWatches from '../../../Hooks/useWatches';

const SelectedWatch = () => {
    const { watchId } = useParams()
    const [ watches ] = useWatches();
    const { user } = useAuth();
    const history = useHistory();
    const clickedWatch = watches.find( watch => watch.id === watchId );
    console.log( watches );
    console.log( clickedWatch );

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
                            <Typography variant="h5" sx={ { color: '#CD5C5C', fontWeight: 900 } }>
                                <span>USD </span>{ clickedWatch?.price }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>

                </Grid>
            </Grid>
        </Container>
    );
};

export default SelectedWatch;