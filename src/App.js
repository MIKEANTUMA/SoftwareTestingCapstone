// @ts-nocheck

import logo from './logo.svg';
import './App.css';
//import { writeUserData } from './Firebase/WriteUser'
//import { authUser } from './Firebase/Auth'
import React  from 'react';
import  getUser  from './Firebase/GetUser'
import writeNewUser from './Firebase/WriteUser';
import { authUser } from './Firebase/Auth';

function App() {
  return authUser('mike@123.com','mike').then((data) => writeNewUser(data.uid,'mike', 'mike@123.com', 'password', 'michael', 'antuofermo', '04/21/2000'))
  return (
    <div className="App">
     

    </div>
  );
}

export default App;