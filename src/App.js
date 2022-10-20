// @ts-nocheck
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import CreateUserScreen from "./pages/CreateUserScreen.js";
import WelcomeScreen from "./pages/WelcomeScreen.js";
import LoginScreen from './pages/LoginScreen.js'
import HomeScreen from './pages/HomeScreen.js'
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<WelcomeScreen/>} />
          <Route exact path="/pages/CreateUserScreen" element={<CreateUserScreen />} />
          <Route exact path="/pages/LoginScreen" element={<LoginScreen />} />
          <Route exact path='pages/HomeScreen' element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

