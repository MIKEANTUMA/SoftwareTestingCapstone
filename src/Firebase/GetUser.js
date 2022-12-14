// @ts-nocheck
import { getDatabase, ref, onValue} from "firebase/database";
import { Player } from "../Classes/Player.js";
import { app } from './Config.js'


export default  function getUser(uid){
    console.log('in get user')
    const db = getDatabase(app);

    const userRef = ref(db, 'users/' + uid);
    
    return new Promise ((resolve, reject) => 
    {
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            console.log('data: ',data)
            let player = new Player(data)
            resolve(data)
            console.log('player: ',player.username)
        })
    })
}






// export function writeUserData(userId, name, email) {
//     const db = getDatabase(app);
  
//     return new Promise ((resolve, reject) => {
//           set(ref(db, 'users/' + userId), {username: name, email: email })
//               .then(() => resolve(true))
//               .catch(() => resolve(false));
//       })
    
//   }