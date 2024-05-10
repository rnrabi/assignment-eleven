import { createContext } from "react";
export const AuthContext = createContext(null)
import PropTypes from 'prop-types';

const ContextProvider = ({children}) => {



    const authInfo ={
        rabi:'rabisssssss'
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;

ContextProvider.propTypes={
    children:PropTypes.node.isRequired
}