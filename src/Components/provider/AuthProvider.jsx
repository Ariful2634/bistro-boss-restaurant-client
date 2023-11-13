/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null)
    const[loading, setLoading]=useState(true)


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe;
        }
    },[])



    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;