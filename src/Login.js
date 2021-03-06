import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import './Login.css';

function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }

  return (
    <div className="login">
     <div className="login__logo">
       <img src="https://cdn.iconscout.com/icon/free/png-256/discord-3691244-3073764.png" alt="" />
     </div>
     <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
