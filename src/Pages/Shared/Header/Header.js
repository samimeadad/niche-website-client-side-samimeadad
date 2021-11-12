import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { Home, Login } from '@mui/icons-material';
import useAuth from '../../../Hooks/useAuth';
import { Button } from '@mui/material';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar position="static" sx={ { backgroundColor: "#17202A", width: 1 } }>
                <Toolbar sx={ { display: 'flex', justifyContent: 'space-between' } }>
                    <Link to="/"><img style={ { width: "120px", marginRight: "20px" } } src={ logo } alt="logoImage" /></Link>

                    <Typography variant="h4">
                        Watch Your Wrist
                    </Typography>

                    <Link style={ { textDecoration: 'none', color: 'white', marginLeft: '10px', marginRight: '10px' } } to="/home">
                        <Home></Home>
                    </Link>

                    <Link style={ { textDecoration: 'none', color: 'white', marginLeft: '10px', marginRight: '10px' } } to="/watches">
                        All Watches
                    </Link>

                    <Link style={ { textDecoration: 'none', color: 'white', marginLeft: '10px', marginRight: '10px' } }
                        to="/about">
                        About Us
                    </Link>

                    <Link style={ { textDecoration: 'none', color: 'white', marginLeft: '10px', marginRight: '10px' } }
                        to="/contact">
                        Contact Us
                    </Link>

                    {
                        !user.email ? <Link style={ { textDecoration: 'none', color: 'white', marginLeft: '10px', marginRight: '10px' } }
                            to="/login">
                            <Login></Login>
                        </Link>
                            :
                            <Box sx={ { display: 'flex' } }>
                                <Link style={ { textDecoration: 'none', color: 'white', marginLeft: '10px', marginRight: '10px', marginTop: '10px' } }>Dashboard</Link>
                                <Button
                                    sx={ { backgroundColor: '#CD5C5C' } }
                                    variant="contained"
                                    color="error"
                                    onClick={ logOut }
                                >Logout <span style={ { color: 'yellow', marginLeft: '5px' } }>{ user.displayName }</span> </Button>
                            </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Header;