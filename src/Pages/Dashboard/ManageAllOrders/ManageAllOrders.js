import { Delete } from '@mui/icons-material';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import useOrders from '../../../Hooks/useOrders';

const ManageAllOrders = () => {
    const [ orders, setOrders ] = useOrders();

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
            <h2>Total orders: { orders.length }</h2>
            <TableContainer component={ Paper }>
                <Table sx={ {} } aria-label="orders Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell align="right">Customer Email</TableCell>
                            <TableCell align="right">Purchased Products</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { orders.map( ( row ) => (
                            <TableRow
                                key={ row._id }
                                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                            >
                                <TableCell component="th" scope="row">
                                    { row.name }
                                </TableCell>
                                <TableCell align="right">{ row.email }</TableCell>
                                <TableCell align="right">{ row.watchName }</TableCell>
                                <TableCell align="right">{ row.price }</TableCell>
                                <TableCell align="right"><Button onClick={ () => deleteOrder( row._id ) }><Delete></Delete></Button>
                                </TableCell>
                            </TableRow>
                        ) ) }
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default ManageAllOrders;