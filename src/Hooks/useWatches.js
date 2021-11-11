import { useEffect, useState } from "react";

// custom hook for specialists api call
const useWatches = () => {
    const [ watches, setWatches ] = useState( [] );

    useEffect( () => {
        fetch( 'http://localhost:5001/watches' )
            .then( res => res.json() )
            .then( data => setWatches( data ) );
    }, [] );

    //return doctors/specialists state variable and setDoctors function
    return [ watches, setWatches ];
}

//export the entire function for external use
export default useWatches;