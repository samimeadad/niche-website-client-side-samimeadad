import { useEffect, useState } from "react";

// custom hook for users api call
const useUsers = () => {
    const [ users, setUsers ] = useState( [] );

    useEffect( () => {
        fetch( 'https://damp-ridge-22727.herokuapp.com/users' )
            .then( res => res.json() )
            .then( data => setUsers( data ) );
    }, [] );

    //return users state variable and setUsers function
    return [ users, setUsers ];
}

//export the entire function for external use
export default useUsers;