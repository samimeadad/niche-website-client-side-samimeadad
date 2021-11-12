import { useEffect, useState } from "react";

// custom hook for reviews api call
const useReviews = () => {
    const [ reviews, setReviews ] = useState( [] );

    useEffect( () => {
        fetch( 'https://damp-ridge-22727.herokuapp.com/reviews' )
            .then( res => res.json() )
            .then( data => setReviews( data ) );
    }, [] );

    //return reviews state variable and setReviews function
    return [ reviews, setReviews ];
}

//export the entire function for external use
export default useReviews;