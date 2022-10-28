import  React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const privateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return ('loading...')
    }
    if(!user) {
        return <Navigate to='/login'state={{from :location}} replace></Navigate>
    }
    return children;
};

export default privateRoute;