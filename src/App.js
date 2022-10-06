import './App.css';
import React , { Component} from 'react';
import { render } from 'react-dom';
// import { writeUserData } from './Firebase/WriteUser'
// import { authUser } from './Firebase/Auth'
import { Button, TextField } from '@mui/material';

function App() {
  
  // const createUser = (userEmail, userPassword, name, userId) =>{
   
  //   console.log("AUTH USER: ", authUser(userEmail, userPassword))
  //   // if(user !==  false){
  //   //   writeUserData(userId, name, userEmail)
  //   // }else{
  //   //   console.log('auth user failed')
  //   // }
  //   // console.log(user)s
  // }
 
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField 
            required
            label="Email"
            id="userEmail" 
            type="email" 
            inputProps={inputProps}
          />;
        </Grid>

        <Grid item xs={12}>
          <TextField 
            required
            label="Password"
            id="userPassword" 
            type="password" 
            inputProps={inputProps} 
          />;
        </Grid>

        <Grid item xs={4}>
          <Button
            id="submit"
            onClick={() => createUser('mike@123.com', 'mike12', 'mike', 1)}
          />;
        </Grid>
      </Grid>
      
    </div>
  );
}
 
export default App;