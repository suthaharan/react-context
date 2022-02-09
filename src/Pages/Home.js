import React, {useState} from 'react';
import Login from './Login';
import Profile from './Profile';

import {LoginContext} from "../ContextHelpers/LoginContext";

const Home = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ color: 'green', fontFamily:'verdana'}}>
        <h1>In Home Page!</h1>

        <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Login />
        <Profile />
        </LoginContext.Provider>

    </div>
  )
}

export default Home