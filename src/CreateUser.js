// @ts-nocheck

import logo from "./logo.svg";
import "./App.css";
//import { writeUserData } from './Firebase/WriteUser'
//import { authUser } from './Firebase/Auth'
import React, { useEffect, useState } from "react";
import getUser from "./Firebase/GetUser";
import writeNewUser from "./Firebase/WriteUser";
import { authUser } from "./Firebase/Auth";

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
    <div className="CreateUser">

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          FirstName:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </label>

        <label>
          LastName:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>

        <label>
          UserName:
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <label>
          Date of Birth YYYY/MM/DD:
          <input type="text" value={DoB} onChange={(e) => setDob(e.target.value)} />
        </label>
        <button onClick={() => handleSubmit()}>press me</button>
    </div>
  );
};

export default CreateUser;

//.then(data => setWU(data))
// writeNewUser(data.user.uid,'mike','password', 'mike@123.com', 'michael', 'antuofermo', '04/21/2000')
