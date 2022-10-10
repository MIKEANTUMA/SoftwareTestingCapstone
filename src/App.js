<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
// import { writeUserData } from './Firebase/WriteUser'
// import { authUser } from './Firebase/Auth'
import { Button, TextField, Grid } from '@mui/material';
import React, { Component }  from 'react';

class App extends Component {
 
  // const createUser = (userEmail, userPassword, name, userId) =>{
   
  //   console.log("AUTH USER: ", authUser(userEmail, userPassword))
  //   // if(user !==  false){
  //   //   writeUserData(userId, name, userEmail)
  //   // }else{
  //   //   console.log('auth user failed')
  //   // }
  //   // console.log(user)
  // }
 
  render(){
    return (
      <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              required
              label="Email"
              id="userEmail" 
              type="email" 
              // inputProps={inputProps}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField 
              required
              label="Password"
              id="userPassword" 
              type="password" 
              // inputProps={inputProps} 
            />
          </Grid>

          <Grid item xs={4}>
            <Button
              id="submit"
              label="Submit"
              // onClick={() => createUser('mike@123.com', 'mike12', 'mike', 1)}
            />
          </Grid>
        </Grid>
        
      </div>
    );
  }
=======
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
>>>>>>> abea651551b5f0eca4655bb4581a637862ea9a8d
}

export default App;

//.then(data => setWU(data))
// writeNewUser(data.user.uid,'mike','password', 'mike@123.com', 'michael', 'antuofermo', '04/21/2000')
