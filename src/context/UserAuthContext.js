import { createContext, useEffect, useState, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";


import {auth} from "../firebase";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children}){
    const [user, setUser] = useState("");

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function login(email,password){
        console.log(email);
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logOut(){
        return signOut(auth);
    }

    //GOOGLE SIGN IN USING BUTTON

    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider);
    }

    useEffect(()=>{
      const  unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
                setUser(currentuser);
        });
        return  ()=>{
            unsubscribe();
        };
    },[]);

    return( <userAuthContext.Provider value={{user,signUp, login, logOut, googleSignIn}} >{children}</userAuthContext.Provider>)
        
    
}

export function useUserAuth(){
    return useContext(userAuthContext);
}