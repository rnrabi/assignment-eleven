import { createContext, useState } from "react";
export const AuthContext = createContext(null)
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // sign up user with email and password
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sociale sign in 
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth , googleProvider);
    }




    const authInfo = {
        signUpUser,
        user,
        loading,
        handleGoogleSignIn
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