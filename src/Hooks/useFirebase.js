import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import initializeFirebaseAuthentication from "../Firebase/firebase.init";

initializeFirebaseAuthentication();

const useFirebase = () => {
    const [ user, setUser ] = useState( {} );
    const auth = getAuth();
    const [ isLoading, setIsLoading ] = useState( true );
    const [ authError, setAuthError ] = useState( '' );
    const [ admin, setAdmin ] = useState( false );

    const googleProvider = new GoogleAuthProvider();

    const registerUser = ( email, password, name, history ) => {
        setIsLoading( true );
        createUserWithEmailAndPassword( auth, email, password )
            .then( ( userCredential ) => {
                setAuthError( '' );
                const newUser = { email, displayName: name };
                setUser( newUser );

                //save user information to the database
                saveUserToDb( email, name, 'POST' );

                //Send name to firebase after registration
                updateProfile( auth.currentUser, {
                    displayName: name
                } ).then( () => {
                    history.replace( '/' );
                } ).catch( ( error ) => {
                    setAuthError( error.message );
                } );

                history.replace( '/' );
            } )
            .catch( ( error ) => {
                setAuthError( error.message );
            } )
            .finally( () => {
                setIsLoading( false );
            } );
    }

    const loginUser = ( email, password, location, history ) => {
        setIsLoading( true );
        signInWithEmailAndPassword( auth, email, password )
            .then( ( userCredential ) => {
                const destination = location?.state?.from || '/';
                history.replace( destination );
                setAuthError( '' );
            } )
            .catch( ( error ) => {
                setAuthError( error.message );
            } )
            .finally( () => {
                setIsLoading( false );
            } );
    }

    const signInWithGoogle = ( location, history ) => {
        setIsLoading( true );
        signInWithPopup( auth, googleProvider )
            .then( ( result ) => {
                const user = result?.user;
                saveUserToDb( user.email, user.displayName, 'PUT' );
                const destination = location?.state?.from || '/';
                history.replace( destination );
                setAuthError( '' );
            } ).catch( ( error ) => {
                setAuthError( error.message );
            } )
            .finally( () => {
                setIsLoading( false );
            } );
    }

    //Set the observer on auth object to get the current user status on real-time
    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, user => {
            if ( user ) {
                setUser( user );
            }
            else {
                setUser( {} );
            }
            setIsLoading( false );
        } );
        return () => unsubscribe();
    }, [ auth ] );

    const saveUserToDb = ( email, displayName, method ) => {
        const user = { email, displayName };
        fetch( 'https://damp-ridge-22727.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( user )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.insertedId ) {
                    alert( 'Thanks for the registration. Keep Watching!' );
                }
            } )
    }

    //Collect the user information to check the user is admin or not
    useEffect( () => {
        fetch( `https://damp-ridge-22727.herokuapp.com/users/${ user.email }` )
            .then( res => res.json() )
            .then( data => setAdmin( data.admin ) )
    }, [ user.email ] )

    const logOut = () => {
        setIsLoading( true );
        signOut( auth ).then( () => {
            // Sign-out successful.
        } ).catch( ( error ) => {
            // An error happened.
        } )
            .finally( () => setIsLoading( false ) );
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;