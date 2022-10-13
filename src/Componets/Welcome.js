import React from "react";
import { Button, TextField, Grid } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Welcome = () => {
  return (
    <div className="welcomePage">

      <div className="welcomeConatainer">
        <div className="welcomeHeader">
          <h1>Welcome to Puttle</h1>
        </div>
        <div className="welcome1">
          <Link color="primary" disabled={false} variant="solid"  to="/pages/LoginScreen">
            Login
          </Link>
        </div>
        <div className="welcome2">
          <Link
            to="/pages/CreateUserScreen"
            color="primary"
            disabled={false}
            variant="solid"
          >
            Create User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
