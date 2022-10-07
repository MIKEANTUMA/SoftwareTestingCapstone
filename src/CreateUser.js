// @ts-nocheck

import logo from "./logo.svg";
import "./App.css";
//import { writeUserData } from './Firebase/WriteUser'
//import { authUser } from './Firebase/Auth'
import React, { useEffect, useState } from "react";
import getUser from "./Firebase/GetUser";
import writeNewUser from "./Firebase/WriteUser";
import { authUser } from "./Firebase/Auth";
import { Button, TextField, Grid } from '@mui/material';

const CreateUser = () => {
  const [temp, setTemp] = useState(false);
  const [wu, setWU] = useState('');
  const [uid, setUid] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DoB, setDob] = useState('');
  const [PASS, setPass] =useState(false)


  const handleSubmit = () => {
    let emailValid = false
    if(String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      emailValid = true;
      console.log('email is vaild')
    }else{
      console.log('email not vaild')
      console.log(emailValid)
    }

    if(PASS === true){
      console.log('in handle submit')
      return authUser(email, password).then(data => {
        if(data === false) console.log('auth did not work')
        setUid(data.user.uid);
        writeNewUser(
          data.user.uid,
          userName,
          password,
          email,
          firstName,
          lastName,
          DoB
        ).then(data => console.log('hopfully this works: ', data));
      });
    }else{
      console.log('error in information entered')
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          required
          label="Email"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          required
          label="Username"
          id="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          fullWidth
          required
          label="First Name"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          fullWidth
          required
          label="Last Name"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          fullWidth
          required
          label="Password"
          type="password"
          id="user"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          fullWidth
          required
          label="Confirm password"
          type="password"
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Grid>
      
      {/* <Grid item xs={12}>
        add datepicker 
      </Grid> */}

      <Grid item xs={12}>
        <Button
          id="submit"
          variant="contained"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
    );
};

export default CreateUser;

//.then(data => setWU(data))
// writeNewUser(data.user.uid,'mike','password', 'mike@123.com', 'michael', 'antuofermo', '04/21/2000')
