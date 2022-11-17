// @ts-ignore
import { authUser } from 'golf/src/Firebase/Auth.js'
// @ts-ignore
import writeUserData from 'golf/src/Firebase/WriteUser.js'
import { WriteNewScoreCard, editScoreCard } from '../src/Firebase/WriteNewScoreCard.js';
import React, { useState, useEffect } from "react";
import { app } from '../src/Firebase/Config.js';
import Card from 'react-bootstrap/Card';
import ReadRecords from '../src/Firebase/ReadRecords.js';
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// test('auth test', () => {
//   return authUser('mike@123.com', 'password').then((data) =>{expect(data).toBe(true);});

// });

// test('write user test', () => {
//   return writeUserData(1, 'mike', 'mike@123.com').then((data) =>{expect(data).toBe(true);});
// });



const newScoreCard = {
    courseName: 'merrick',
    players: 'mike',
    date: '2022-04-21',
    holes: '2',
    par: ['1', '2'],
    holeNumber: ['1', '2'],
    holeYardage: ['100', '200']
}

// test('write new score card', async () =>{
//     const data = await WriteNewScoreCard(newScoreCard);
//     expect(data).toBe(true);
// })



// test('read score card', async () =>{
//     const data = await ReadRecords()
//     expect(data).toBe(true);
// })



const signin = async () => {
    const auth = getAuth(app);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, 'mike@123.com', 'mike123')
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // console.log('log in worked: ', user)
                resolve(true)
            })
            .catch((error) => {
                reject(error.message)
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });


    })
}

// test('test sign in', async () => {
//     const data = await signin()
//     // expect(data).toBe(true);
//     return signin().then((data) => { expect(data).toBe(true); });
// })


test('test edit record', async () =>{
    const result = await editScoreCard(newScoreCard, '-NFzb0LnmM8CueVCg9gv')
    expect(result).toBe(true)
})

