import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Gender = () => {
    return (
        <Container sx={ { my: 20 } }>
            <Typography variant="h3" sx={ { fontWeight: 'bold', mb: 4, textAlign: 'center' } }>Please Select Your Gender</Typography>
            <Box sx={ { textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'space-around' } }>
                <Link to="/menWatches" style={ { textDecoration: 'none' } }><Button variant="contained" color="secondary" sx={ { fontWeight: 'bold', fontSize: '1.5rem', px: 4, py: 4, backgroundColor: '#922B21' } }>Watches For Men</Button></Link>
                <Link to="/womenWatches" style={ { textDecoration: 'none' } }><Button variant="contained" color="success" sx={ { fontWeight: 'bold', fontSize: '1.5rem', px: 4, py: 4, backgroundColor: '#AF7AC5' } }>Watches For Women</Button></Link>
            </Box>
        </Container>
    );
};

export default Gender;