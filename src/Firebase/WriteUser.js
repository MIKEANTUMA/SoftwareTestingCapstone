import { getDatabase, ref, set } from "firebase/database";
import { app } from './Config.js'

function writeUserData(userId, name, email) {
  const db = getDatabase(app);

  return new Promise ((resolve, reject) => {
        set(ref(db, 'users/' + userId), {username: name, email: email })
            .then(() => resolve(true))
            .catch(() => resolve(false));
    })
  
}


module.exports = writeUserData

