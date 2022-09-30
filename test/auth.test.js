import { authUser }  from 'golf/src/Firebase/Auth.js' 
import writeUserData  from 'golf/src/Firebase/WriteUser.js' 

// test('auth test', () => {
//   return authUser('mike@123.com', 'password').then((data) =>{expect(data).toBe(true);});

// });

test('write user test', () => {
  return writeUserData(1, 'mike', 'mike@123.com').then((data) =>{expect(data).toBe(true);});
});

