import logo from "./logo.svg";
import "./App.css";
import React from "react";







export default function UserVaildation(userData){


    let vaild = {
        userName: false,
        password: false,
        email: false,
        firstName: false,
        lastName: false,
      }

    console.log(userData)
    console.log('email ', userData.email)


    if((userData.userName != null) && (userData.password != null) && (userData.email != null) && (userData.firstName != null) && (userData.lastName != null) ){
        return true
    }

    // let emailValid = false;
    // let nameVaild = false;
    // if (
    //     String(email)
    //     .toLowerCase()
    //     .match(
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     )
    // ) {
    //     emailValid = true;
    //     console.log("email is vaild");
    // } else {
    //     console.log("email not vaild");
    // }

    // if (
    //     String(firstName).toLowerCase().match(/^[a-zA-Z\-]+$/) &&
    //     String(lastName).toLowerCase().match(/^[a-zA-Z\-]+$/)
    // ) {
    //     nameVaild = true;
    //     console.log("first and last name is vaild");
    // }



    
};
