// @ts-nocheck
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import CreateUserScreen from "./pages/CreateUserScreen.js";
import WelcomeScreen from "./pages/WelcomeScreen.js";
import LoginScreen from './pages/LoginScreen.js'
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<WelcomeScreen/>} />
          <Route exact path="/pages/CreateUserScreen" element={<CreateUserScreen />} />
          <Route exact path="/pages/LoginScreen" element={<LoginScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

