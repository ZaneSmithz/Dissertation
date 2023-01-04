import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';

const AuthContext = React.createContext();

const UseAuth = () => {
    return (
        useContext(AuthContext)
    )
}

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe =  auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
    
        return unsubscribe
    }, []);
   
     const value = {
        currentUser,
        login,
        signup,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider};
export {UseAuth};
