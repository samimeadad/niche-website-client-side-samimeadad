import { useEffect, useState } from "react";

// custom hook for watches api call
const useWatches = () => {
    const [ watches, setWatches ] = useState( [] );

    useEffect( () => {
        fetch( 'http://localhost:5001/watches' )
            .then( res => res.json() )
            .then( data => setWatches( data ) );
    }, [] );

    //return watches state variable and setWatches function
    return [ watches, setWatches ];
}

//export the entire function for external use
export default useWatches;