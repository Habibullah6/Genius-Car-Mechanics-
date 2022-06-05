import React from 'react';
import useAuth from '../../../context/useAuth';

const Login = () => {
    const {signInUsingGoogle, users, logOut} = useAuth()
    return (
        <div>
            <h1>this is login</h1>
           
              <button onClick={signInUsingGoogle} className='btn btn-success'>google sign in</button>
           
        </div>
    );
};

export default Login;