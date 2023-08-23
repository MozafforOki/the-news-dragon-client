import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const  AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    //1.
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //2.
    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //3.
    const userProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{ displayName: name, photoURL: photo})
    }

    //04 email verification
    const verifyEmail = () =>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    //05 log out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    
    //06.user observetion
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
            console.log(loggedUser)
            setUser(loggedUser)
            setLoading(false)

            return () => unsubscribe()
        })
    },[])
    

    const authInfo = {
        createUser,
        login,
        userProfile,
        verifyEmail,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;