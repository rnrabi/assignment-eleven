import { useContext } from "react";
import { AuthContext } from "../../contextApi/ContextProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}