import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useReviews from '../../../../Hooks/useReviews';
import Review from '../Review/Review';


const Reviews = () => {
    const [ reviews ] = useReviews();

    return (
        <Container sx={ { my: 20 } }>
            <Typography variant="h3" sx={ { textAlign: 'center', mb: 4, fontWeight: 'bold' } }>Our Well Wishers</Typography>
            <Grid container spacing={ 2 }>
                {
                    reviews.map( review => <Review
                        key={ review._id }
                        review={ review }>
                    </Review> )
                }
            </Grid>
        </Container>
    );
};

export default Reviews;