import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Watch = ( props ) => {
    const { _id, name, description, price, image } = props.watch;

    return (
        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
            <Card sx={ { maxWidth: 345, maxHeight: "100%" } }>
                <CardMedia
                    component="img"
                    image={ image }
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={ { fontWeight: 'bold', color: '#CD5C5C' } }>
                        { name }
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        { description.slice( 0, 150 ) }
                    </Typography>
                    <Typography variant="h5" sx={ { mt: 2, color: '#CD5C5C', fontWeight: 900 } }>
                        <span>USD </span>{ price }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={ `/watch/${ _id }` } style={ { textDecoration: 'none', marginLeft: 5 } }><Button variant="contained" color="error" sx={ { backgroundColor: '#CD5C5C' } }>Purchase</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Watch;