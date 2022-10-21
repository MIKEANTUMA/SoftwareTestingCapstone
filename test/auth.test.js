// @ts-ignore
import { authUser }  from 'golf/src/Firebase/Auth.js' 
// @ts-ignore
import writeUserData  from 'golf/src/Firebase/WriteUser.js' 
import WriteNewScoreCard from '../src/Firebase/WriteNewScoreCard.js'

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
    par: ['1','2'],
    holeNumber: ['1','2'],
    holeYardage: ['100','200']
}

test('write new score card', () =>{
    return WriteNewScoreCard(newScoreCard).then((data) =>{expect(data).toBe(true)})
})