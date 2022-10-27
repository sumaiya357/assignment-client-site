import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext= createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
      
    const [user, setUser] = useState([])
    // const user ={displayName:'sanji'}

    // ------ GOOGLE SignIn ------
    const signIn= (provider) =>{
        return signInWithPopup(auth, provider)
    }
    // ------ GITHUB SignIn ------
    const signInWithGit= (provider) =>{
        return signInWithPopup(auth, provider)
    }

    // ------ EMAIL/PASS SignIn ------
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

   useEffect(() =>{
    const unsubscribe= onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        return() =>{
         unsubscribe()
        }
    })
   })
  
    const authInfo ={user,signIn,createUser,signInWithGit}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>

    
    );
};

export default AuthProvider;