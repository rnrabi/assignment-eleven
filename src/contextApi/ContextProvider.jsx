import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null)
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const ContextProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // sign up user with email and password
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // social sign in 
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const handleGithubSignIn =()=>{
        return signInWithPopup(auth , githubProvider)
    }

    // logout user
    const logOutUser = () => {
        return signOut(auth)
    }

    // current user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])



    const authInfo = {
        signUpUser,
        user,
        loading,
        setLoading,
        handleGoogleSignIn,
        handleGithubSignIn,
        signInUser,
        logOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}