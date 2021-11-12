import { useEffect, useState } from "react";

// custom hook for orders api call
const useOrders = () => {
    const [ orders, setOrders ] = useState( [] );

    useEffect( () => {
        fetch( 'https://damp-ridge-22727.herokuapp.com/orders' )
            .then( res => res.json() )
            .then( data => setOrders( data ) );
    }, [] );

    //return orders state variable and setOrders function
    return [ orders, setOrders ];
}

//export the entire function for external use
export default useOrders;