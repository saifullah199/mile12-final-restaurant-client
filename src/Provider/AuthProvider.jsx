

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";



export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()

    // create user
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // sign in 
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // google sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logOut =() => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    // const updateUserProfile = (name, photo) => {
    //     return updateProfile(auth.currentUser, {
    //       displayName: name,
    //       photoURL: photo,
    //     })
    //   }

    useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            
            console.log('user in the auth state changed', currentUser)
            setUser(currentUser)
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then( res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })


            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
            // if user exists then issue a token
            
            
        })
        return () => {
            return unsubscribe()
        }
        
           
        
    },[axiosPublic])
    const authInfo ={
        user,
        createUser,
        signIn,
        loading,
        logOut,
        updateUserProfile,
        googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;