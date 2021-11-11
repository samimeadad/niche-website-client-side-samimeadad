import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Review = ( props ) => {
    const { name, description, rating } = props.review;

    return (
        <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
            <Card sx={ { maxWidth: 350, minHeight: 100 } }>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={ { fontWeight: 'bold', color: '#CD5C5C' } }>
                        { name }
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        { description.slice( 0, 100 ) }
                    </Typography>
                    <Typography variant="h6" sx={ { color: '#CD5C5C' } }>
                        <span>Rating: </span>{ rating }
                    </Typography>
                    <Stack spacing={ 1 }>
                        <Rating name="half-rating-read" defaultValue={ rating } precision={ .05 } readOnly />
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;