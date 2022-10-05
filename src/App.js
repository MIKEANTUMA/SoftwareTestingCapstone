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
  
  // writeNewUser(data.uid,'mike', 'mike@123.com', 'password', 'michael', 'antuofermo', '04/21/2000')
  return (
    <div className="App">
     <button onClick={()=> {return authUser('mike1@123.com','mike12').then((data) => writeNewUser(data.user.uid,'mike', 'mike@123.com', 'password', 'michael', 'antuofermo', '04/21/2000'))}}>press me</button>

    </div>
  );
}

export default App;