// @ts-nocheck

import logo from "./logo.svg";
import "./App.css";
//import { writeUserData } from './Firebase/WriteUser'
//import { authUser } from './Firebase/Auth'
import React, { useEffect, useState } from "react";
import getUser from "./Firebase/GetUser";
import CreateUser from './CreateUser'

function App() {
  // const [temp, setTemp] = useState(false);
  // const [wu, setWU] = useState();
  // const [uid, setUid] = useState()
  // // useEffect(
  //   () => {
  //     if (wu === true) {
  //       getUser(uid).then(d => {
  //         setTemp(d);
  //       });
  //     }
  //   },
  //   [wu]
  // );
  

  
  // writeNewUser(data.uid,'mike', 'mike@123.com', 'password', 'michael', 'antuofermo', '04/21/2000')
  return (
    <div className="App">
      <CreateUser/>
    </div>
  );
}

export default App;

//.then(data => setWU(data))
// writeNewUser(data.user.uid,'mike','password', 'mike@123.com', 'michael', 'antuofermo', '04/21/2000')
