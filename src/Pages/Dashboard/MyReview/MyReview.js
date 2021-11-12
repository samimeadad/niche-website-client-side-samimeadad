import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyReview = () => {
    const [ reviewData, setReviewData ] = useState( {} );
    const { user } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        newReviewData[ field ] = value;
        setReviewData( newReviewData );
        e.preventDefault();
    }

    const handleReviewSubmit = ( e ) => {
        fetch( 'https://damp-ridge-22727.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( reviewData )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.insertedId ) {
                    alert( 'Your feedback has been posted successfully. Thank you.' );
                }
            } )
        e.preventDefault();
    }

    return (
        <Box>
            <Typography variant="h4">Customer Feedback Page</Typography>
            <Typography variant="h5" sx={ { mt: 4, mb: 1 } }>Please submit the below form to post your valuable feedback</Typography>
            <form>
                <TextField
                    sx={ { width: 1, mb: 2 } }
                    id="nameInput"
                    type="text"
                    name="name"
                    label="Your Name"
                    defaultValue={ user?.displayName }
                    required
                    onBlur={ handleOnBlur }
                />
                <TextField
                    sx={ { width: 1, mb: 2 } }
                    id="reviewInput"
                    type="text"
                    name="reviewInput"
                    label="Please write your review here and post"
                    required
                    multiline
                    rows={ 5 }
                    onBlur={ handleOnBlur }
                />
                <TextField
                    sx={ { width: 1 } }
                    id="ratingInput"
                    type="text"
                    name="rating"
                    label="Please give a rating from 1 to 5 (1=Poor, 1.5=Poor, 2=Ok, 2.5=Below Average, 3=Average, 3.5=Above Average, 4=Good, 5=Excellent)"
                    defaultValue={ 5 }
                    required
                    onBlur={ handleOnBlur }
                />
                <Button onClick={ handleReviewSubmit } type="submit" variant="contained" color="primary" sx={ { mt: 4 } }>Post Your Review</Button>
            </form>
        </Box>
    );
};

export default MyReview;