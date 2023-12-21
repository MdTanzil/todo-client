/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          // const uid = user.uid;
          console.log(user);
          setUser(user);
          // ...
        } else {
          // User is signed out
          // ...
          setUser(null);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    }, [auth]);
    //user registration
    const register = (email, password) => {
      setLoading(false);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    //user login
    const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    //user logout
    const logout = () => {
      setLoading(true);
      setUser(null)
      
      return signOut(auth);
    };
  
    // update user data
    const updateUserData = (displayName, url) => {
      return updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: url,
      });
    };
    // all auth information in info object
    const info ={
        register,
        user,
        loading,
        signInWithGoogle,
        login,
        logout,
        updateUserData,
        setUser
    } 
    // console.log(info);
    return (
        <AuthContext.Provider value={info} >{children}</AuthContext.Provider >
    );
};

export default AuthProvider;