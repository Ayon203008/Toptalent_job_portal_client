import React from 'react';
import { AuthContext } from '../Context/AuthContext';
import { use } from 'react';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user} = use(AuthContext)

    if(!user){
        <Navigate to={'/login'}/>
    }

    return children
};

export default PrivateRoute;