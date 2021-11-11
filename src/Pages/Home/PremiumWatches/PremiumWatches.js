import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useWatches from '../../../Hooks/useWatches';
import Watch from '../../Watches/Watch/Watch';

const PremiumWatches = () => {
    const [ watches ] = useWatches();
    const premiumWatches = watches.filter( watch => watch.premium === "true" );
    return (
        <Container sx={ { my: 8 } }>
            <Typography variant="h3" sx={ { textAlign: 'center', my: 8, fontWeight: 'bold' } }>Our Exclusive Collections</Typography>
            <Grid container spacing={ 4 }>
                {
                    premiumWatches.map( watch => <Watch
                        key={ watch.id }
                        watch={ watch }>
                    </Watch> )
                }
            </Grid>
        </Container>
    );
};

export default PremiumWatches;