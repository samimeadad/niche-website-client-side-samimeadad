import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Watch = ( props ) => {
    const { name, description, price, image } = props.watch;
    return (
        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
            <Card sx={ { maxWidth: 345, maxHeight: "100%" } }>
                <CardMedia
                    component="img"
                    image={ image }
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={ { fontWeight: 'bold' } }>
                        { name }
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        { description.slice( 0, 150 ) }
                    </Typography>
                    <Typography variant="h5" sx={ { color: 'red', fontWeight: 900 } }>
                        <span>USD </span>{ price }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Watch;