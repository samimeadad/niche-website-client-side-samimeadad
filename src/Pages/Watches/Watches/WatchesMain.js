import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useWatches from '../../../Hooks/useWatches';
import Watch from '../Watch/Watch';

//individual watch card imported from material ui and displayed on the client side
const WatchesMain = () => {
    const [ watches ] = useWatches()
    return (
        <Container sx={ { my: 10 } }>
            <Typography variant="h2" sx={ { textAlign: 'center', my: 8, fontWeight: 'bold', color: '#CD5C5C' } }>Our Collections</Typography>
            <Grid container spacing={ 4 }>
                {
                    watches.map( watch => <Watch
                        key={ watch._id }
                        watch={ watch }>
                    </Watch> )
                }
            </Grid>
        </Container>
    );
};

export default WatchesMain;