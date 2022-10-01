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
}
 
export default App;