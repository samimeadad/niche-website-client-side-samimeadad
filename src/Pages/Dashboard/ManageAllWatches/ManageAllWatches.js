import React from 'react';
import useWatches from '../../../Hooks/useWatches';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Delete } from '@mui/icons-material';

const ManageAllWatches = () => {
    const [ watches, setWatches ] = useWatches();

    const deleteWatch = ( id ) => {
        const proceed = window.confirm( "Are you sure to delete the watch data?" );
        if ( proceed ) {
            const url = `https://damp-ridge-22727.herokuapp.com/watches/${ id }`;
            fetch( url, {
                method: 'DELETE'
            } )
                .then( res => res.json() )
                .then( data => {
                    if ( data.deletedCount > 0 ) {
                        const remainingWatches = watches.filter( watch => parseInt( watch._id ) !== parseInt( id ) );
                        setWatches( remainingWatches );
                        alert( 'The Watch Data Deleted Successfully' );
                        window.location.reload( false );
                    }
                } )
        }
    }

    return (
        <div>
            <h2>Total orders: { watches.length }</h2>
            <TableContainer component={ Paper }>
                <Table sx={ {} } aria-label="orders Table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Watch Name</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { watches.map( ( row ) => (
                            <TableRow
                                key={ row?._id }
                                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                            >
                                <TableCell align="left">{ row?.name }</TableCell>
                                <TableCell align="left">{ row?.price }</TableCell>
                                <TableCell align="left"><Button onClick={ () => deleteWatch( row?._id ) }><Delete></Delete></Button>
                                </TableCell>
                            </TableRow>
                        ) ) }
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default ManageAllWatches;