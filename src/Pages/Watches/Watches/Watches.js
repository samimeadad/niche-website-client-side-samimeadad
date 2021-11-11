import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useWatches from '../../../Hooks/useWatches';
import Watch from '../Watch/Watch';

const Watches = () => {
    const [ watches ] = useWatches()
    return (
        <Container>
            <Typography variant="h2" sx={ { textAlign: 'center', my: 8, fontWeight: 'bold', color: '#CD5C5C' } }>Our Collections</Typography>
            <Grid container spacing={ 4 }>
                {
                    watches.map( watch => <Watch
                        key={ watch.id }
                        watch={ watch }>
                    </Watch> )
                }
            </Grid>
        </Container>
    );
};

export default Watches;