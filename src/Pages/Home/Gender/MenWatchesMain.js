import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useWatches from '../../../Hooks/useWatches';
import Watch from '../../Watches/Watch/Watch';


const MenWatchesMain = () => {
    const [ watches ] = useWatches();
    const menWatches = watches.filter( watch => watch.gender === "m" );
    return (
        <Container sx={ { my: 10 } }>
            <Typography variant="h2" sx={ { textAlign: 'center', my: 8, fontWeight: 'bold', color: '#CD5C5C' } }>Mens Collections</Typography>
            <Grid container spacing={ 4 }>
                {
                    menWatches.map( watch => <Watch
                        key={ watch.id }
                        watch={ watch }>
                    </Watch> )
                }
            </Grid>
        </Container>
    );
};

export default MenWatchesMain;