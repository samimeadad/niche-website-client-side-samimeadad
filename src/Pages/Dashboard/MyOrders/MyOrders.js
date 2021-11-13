import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useOrders from '../../../Hooks/useOrders';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';

const MyOrders = () => {
    const [ orders, setOrders ] = useOrders();
    const { user } = useAuth();
    const userOrder = orders.filter( order => user.email === order.email );

    const deleteOrder = ( id ) => {
        const proceed = window.confirm( "Are you sure to delete the booking data?" );
        if ( proceed ) {
            const url = `https://damp-ridge-22727.herokuapp.com/orders/${ id }`;
            fetch( url, {
                method: 'DELETE'
            } )
                .then( res => res.json() )
                .then( data => {
                    if ( data.deletedCount > 0 ) {
                        const remainingOrders = orders.filter( order => parseInt( order._id ) !== parseInt( id ) );
                        setOrders( remainingOrders );
                        alert( 'Your Order Data Deleted Successfully' );
                        window.location.reload( false );
                    }
                } )
        }
    }

    return (
        <div>
            <h2>Total orders: { userOrder.length }</h2>
            <TableContainer component={ Paper }>
                <Table sx={ {} } aria-label="orders Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell align="left">Customer Email</TableCell>
                            <TableCell align="left">Purchased Products</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Order Status</TableCell>
                            <TableCell align="left">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { userOrder.map( ( row ) => (
                            <TableRow
                                key={ row?._id }
                                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                            >
                                <TableCell component="th" scope="row">
                                    { row?.name }
                                </TableCell>
                                <TableCell align="left">{ row?.email }</TableCell>
                                <TableCell align="left">{ row?.watchName }</TableCell>
                                <TableCell align="left">{ row?.price }</TableCell>
                                <TableCell align="left">{ row?.status }</TableCell>
                                <TableCell align="left"><Button onClick={ () => deleteOrder( row?._id ) }><Delete></Delete></Button>
                                </TableCell>
                            </TableRow>
                        ) ) }
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default MyOrders;