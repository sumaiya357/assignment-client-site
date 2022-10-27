import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext= createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {

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

    const authInfo ={signIn,createUser,signInWithGit}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>

    
    );
};

export default AuthProvider;