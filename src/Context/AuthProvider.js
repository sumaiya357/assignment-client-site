import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext= createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
      
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true);
    // const user ={displayName:'sanji'}

    // ------ GOOGLE SignIn ------
    const providerLogin= (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // ------ GITHUB SignIn ------
    const signInWithGit= (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

 
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
   // ------ EMAIL/PASS SignIn ------
    const  signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const logout =() => {
        setLoading(true)
        return signOut(auth);
     }
   useEffect(() =>{
    const unsubscribe= onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        return() =>{
         unsubscribe()
        }
    })
   })
  
    const authInfo ={user,logout,signIn,createUser,signInWithGit,providerLogin}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>

    
    );
};

export default AuthProvider;