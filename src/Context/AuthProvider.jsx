import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../Firebase/firebase.init";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, SetLoading] = useState(true);

  // ! function for registration
  const createuser = (email, password) => {
    SetLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ! fucntion for login a user
  const SignInUser = (email, password) => {
    SetLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ! function for logout
  const signOutUser =()=>{
    SetLoading(true)
    return signOut(auth)
  }

  // ! function for observe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        SetLoading(false)
        console.log("user in the auth state chnaged",currentUser)
    });
    return ()=> unsubscribe()
  }, []);

  const AuthInfo = { createuser, loading, user, SignInUser,signOutUser};

  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
