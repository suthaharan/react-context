import React, { useContext } from 'react';
import {LoginContext} from "../ContextHelpers/LoginContext";

const ChangePassword = () => {
    const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div style={{ color: 'orange', fontFamily:'Tahoma'}}>
        ChangePassword
        <h6>{loggedIn? "Logged": "Not logged in!"}</h6>   
        <button onClick={() => setLoggedIn(!loggedIn)}>Change login status</button>
    </div>
  )
}

export default ChangePassword