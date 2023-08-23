import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

        if(loading){
            return <>
                    <Spinner animation="border" size="sm" variant="primary" />
                    <Spinner animation="border" variant="warning" />
                    </>
        }
    
        if(user){
            return children;
        }
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
 
};

export default PrivetRoute;