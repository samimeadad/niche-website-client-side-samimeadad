import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../Hooks/useAuth';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Button } from '@mui/material';
import DashboardBody from '../DashboardBody/DashboardBody';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import MyReview from '../MyReview/MyReview';

const drawerWidth = 200;

const Dashboard = ( props ) => {
    const { user, logOut } = useAuth();
    let { path, url } = useRouteMatch();

    const { window } = props;
    const [ mobileOpen, setMobileOpen ] = React.useState( false );

    const handleDrawerToggle = () => {
        setMobileOpen( !mobileOpen );
    };

    const drawer = (
        <Box sx={ { backgroundColor: '#17202A', height: 1 } }>
            <Toolbar />
            <Typography variant="h6" sx={ { mb: 4, textAlign: 'center', color: 'white' } }>Navigation Menu</Typography>
            <Divider sx={ { backgroundColor: "gray" } } />
            <Box sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' } }>
                <Link to="/home" style={ { textDecoration: 'none', color: 'white' } }><Button color='inherit'>Home</Button></Link>
                <Link to={ `${ url }` } style={ { textDecoration: 'none' } }><Button color='inherit'>Dashboard</Button></Link>
                <Link to={ `${ url }/payment` } style={ { textDecoration: 'none', color: 'white' } }><Button color='inherit'>Payment</Button></Link>
                <Link to={ `${ url }/myOrders` } style={ { textDecoration: 'none', color: 'white' } }><Button color='inherit'>My Orders</Button></Link>
                <Link to={ `${ url }/review` } style={ { textDecoration: 'none', color: 'white' } }><Button color='inherit'>Give a Review</Button></Link>
                <Button onClick={ logOut } color='inherit'>Logout</Button>
            </Box>
            <Divider sx={ { backgroundColor: "gray" } } />
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={ { display: 'flex' } }>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={ {
                    width: { sm: `calc(100% - ${ drawerWidth }px)` },
                    ml: { sm: `${ drawerWidth }px` },
                    backgroundColor: '#17202A'
                } }
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={ handleDrawerToggle }
                        sx={ { mr: 2, display: { sm: 'none' } } }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Your are login as <span style={ { color: "yellow" } }>{ user.displayName }</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */ }
                <Drawer
                    container={ container }
                    variant="temporary"
                    open={ mobileOpen }
                    onClose={ handleDrawerToggle }
                    ModalProps={ {
                        keepMounted: true, // Better open performance on mobile.
                    } }
                    sx={ {
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    } }
                >
                    { drawer }
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={ {
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    } }
                    open
                >
                    { drawer }
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={ { flexGrow: 1, p: 3, width: { sm: `calc(100% - ${ drawerWidth }px)` } } }
            >
                <Toolbar />
                <Switch>
                    <Route exact path={ path }>
                        <DashboardBody />
                    </Route>
                    <Route path={ `${ path }/payment` }>
                        <Payment></Payment>
                    </Route>
                    <Route path={ `${ path }/myOrders` }>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={ `${ path }/review` }>
                        <MyReview></MyReview>
                    </Route>

                </Switch>
            </Box>
        </Box>
    );

};

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;