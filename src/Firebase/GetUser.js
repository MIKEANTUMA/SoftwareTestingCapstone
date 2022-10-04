import { getDatabase, ref, onValue} from "firebase/database";
const  app = require('./Config')


export function getUser(userId){
    const db = getDatabase(app);

    const userRef = ref(db, 'users/' + 1);
    
    onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    });
}






// export function writeUserData(userId, name, email) {
//     const db = getDatabase(app);
  
//     return new Promise ((resolve, reject) => {
//           set(ref(db, 'users/' + userId), {username: name, email: email })
//               .then(() => resolve(true))
//               .catch(() => resolve(false));
//       })
    
//   }