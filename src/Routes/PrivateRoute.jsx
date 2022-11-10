import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { Watch } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        console.log('loading happened')
        return <Watch
        height="80"
        width="80"
        radius="48"
        color="#000000"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    }

    if(user && user.uid){
        return children
    }
    else{
        return <Navigate to='/login' state={{from : location}} replace></Navigate>
    }
};

export default PrivateRoute;