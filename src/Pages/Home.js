import React, {useReducer} from 'react';
import Login from './Login';
import Profile from './Profile';

import {LoginContext} from "../ContextHelpers/LoginContext";

const initialState = {logCount: 0, cpCount: 0};
const reducer = (state, action) => {
    console.log(state)
    console.log(action)
    switch(action){
        case "LOGIN":
            return { ...state, logCount: state.logCount + 1 };
        case "CHANGEPASSWORD":
            return { ...state, cpCount: state.cpCount + 1 };
        default:
            return state;
    }
}

const Home = () => {

  const [reducerstate, dispatch] = useReducer(reducer, initialState);

  // If there are other logic functions that you would want to make use of, 
  // you can write it here and pass it in "value" prop for the provider

  return (
    <div style={{ color: 'green', fontFamily:'verdana'}}>
        <h1>In Home Page!</h1>
        <h6>LogCount {reducerstate.logCount}, Changed Password Count {reducerstate.cpCount}</h6>
        <LoginContext.Provider value={{ reducerstate, dispatch }}>
        <Login />
        <Profile />
        </LoginContext.Provider>

    </div>
  )
}

export default Home