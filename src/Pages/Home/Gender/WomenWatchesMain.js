import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useWatches from '../../../Hooks/useWatches';
import Watch from '../../Watches/Watch/Watch';

const WomenWatchesMain = () => {
    const [ watches ] = useWatches();
    const womenWatches = watches.filter( watch => watch.gender === "f" );
    return (
        <Container sx={ { my: 10 } }>
            <Typography variant="h2" sx={ { textAlign: 'center', my: 8, fontWeight: 'bold', color: '#CD5C5C' } }>Women's Collections</Typography>
            <Grid container spacing={ 4 }>
                {
                    womenWatches.map( watch => <Watch
                        key={ watch.id }
                        watch={ watch }>
                    </Watch> )
                }
            </Grid>
        </Container>
    );
};

export default WomenWatchesMain;