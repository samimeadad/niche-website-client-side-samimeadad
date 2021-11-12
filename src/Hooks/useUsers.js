import { useEffect, useState } from "react";

// custom hook for orders api call
const useUsers = () => {
    const [ users, setUsers ] = useState( [] );

    useEffect( () => {
        fetch( 'https://damp-ridge-22727.herokuapp.com/users' )
            .then( res => res.json() )
            .then( data => setUsers( data ) );
    }, [] );

    //return orders state variable and setOrders function
    return [ users, setUsers ];
}

//export the entire function for external use
export default useUsers;