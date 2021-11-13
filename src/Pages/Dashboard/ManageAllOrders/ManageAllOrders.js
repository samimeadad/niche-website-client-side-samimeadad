import { Delete, Edit } from '@mui/icons-material';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import useOrders from '../../../Hooks/useOrders';

const ManageAllOrders = () => {
    const [ orders, setOrders ] = useOrders();

    const modifyStatus = ( _id, status ) => {
        const updatedOrder = { _id, status };
        fetch( "https://damp-ridge-22727.herokuapp.com/orders", {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( updatedOrder )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.modifiedCount > 0 ) {
                    alert( 'Status Update Successful' );
                    window.location.reload();
                }
            } )
    }

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
                            <TableCell align="left">Customer Email</TableCell>
                            <TableCell align="left">Purchased Products</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Order Status</TableCell>
                            <TableCell align="left">Update Status</TableCell>
                            <TableCell align="left">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { orders.map( ( row ) => (
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
                                <TableCell align="left"><Button onClick={ () => modifyStatus( row?._id, "Shipped" ) }><Edit></Edit></Button>
                                </TableCell>
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

export default ManageAllOrders;