import React from 'react';
import { AuthContext } from '../Context/AuthContext';
import { use } from 'react';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loading} = use(AuthContext)
    const location = useLocation()
    console.log(location)

    // ! if you dont use loading and if you refresh a page 
    // ! under the private route it will navigate to the login page
    if(loading){
        return "Show a laoding here from daisy ui"
    }

    if(!user){
      return  <Navigate state={location.pathname} to={'/login'}/>
    }

    return children
};

export default PrivateRoute;