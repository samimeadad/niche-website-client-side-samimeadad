import { useEffect, useState } from "react";

// custom hook for specialists api call
const useWatches = () => {
    const [ watches, setWatches ] = useState( [] );

    useEffect( () => {
        fetch( './watches.json' )
            .then( res => res.json() )
            .then( data => setWatches( data ) );
    }, [] );

    //return doctors/specialists state variable and setDoctors function
    return [ watches, setWatches ];
}

//export the entire function for external use
export default useWatches;