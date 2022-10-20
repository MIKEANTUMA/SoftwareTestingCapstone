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
import CreateUserShowcase from "../Componets/CreateUserShowcase";
import { app } from "../Firebase/Config.js";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen.js'
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LoginForm = () => {
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, setLogIn] = useState(false);
  let navigate = useNavigate(); 


  const handleSubmit = () => {

 

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('log in worked: ', user)
        setLogIn(true)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    //setLogIn(true)
  };


  useEffect(() => {
    if(logIn === true){
        const path = "/pages/HomeScreen"
        navigate(path);
    }
  },[logIn])

  return (
    <div className="inputCon">
      <h1>Puttle Login</h1>
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
            label="Password"
            id="password"
            onChange={e => setPassword(e.target.value)}
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

export default LoginForm;
