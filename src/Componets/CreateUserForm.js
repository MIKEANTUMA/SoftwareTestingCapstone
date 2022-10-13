// @ts-nocheck

import logo from "../logo.svg";
import "../App.css";
//import { writeUserData } from './Firebase/WriteUser'
//import { authUser } from './Firebase/Auth'
import React, { useEffect, useState } from "react";
import getUser from "../Firebase/GetUser";
import writeNewUser from "../Firebase/WriteUser";
import { authUser } from "../Firebase/Auth";
import { Button, TextField, Grid } from "@mui/material";
import UserVaildation from "../UserValidation.js";
import CreateUserShowcase from '../Componets/CreateUserShowcase'



const CreateUserForm = () => {
  const [temp, setTemp] = useState(false);
  const [wu, setWU] = useState("");
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [PASS, setPass] = useState(false);

  const handleSubmit = () => {
    let userData = {
      userName: userName,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
    };

    const PASS = UserVaildation(userData);

    if (PASS === true) {
      console.log("in handle submit");
      return authUser(email, password).then(data => {
        if (data === false) console.log("auth did not work");
        setUid(data.user.uid);
        writeNewUser(
          data.user.uid,
          userName,
          password,
          email,
          firstName,
          lastName,
        ).then(data => console.log("hopfully this works: ", data));
      });
    } else {
      console.log("error in information entered");
    }
  };

  return (
      <div className='inputCon'>
        <h1>Puttle Create User</h1>
        <Grid container spacing={2} columns={1}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="Email"
              id="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="Username"
              id="userName"
              onChange={e => setUserName(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              required
              label="First Name"
              id="firstName"
              onChange={e => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              required
              label="Last Name"
              id="lastName"
              onChange={e => setLastName(e.target.value)}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              fullWidth
              required
              label="Password"
              type="password"
              id="user"
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              required
              label="Confirm password"
              type="password"
              id="confirmPassword"
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </Grid>
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
      </div>
  );
};

export default CreateUserForm;

//.then(data => setWU(data))
// writeNewUser(data.user.uid,'mike','password', 'mike@123.com', 'michael', 'antuofermo', '04/21/2000')
