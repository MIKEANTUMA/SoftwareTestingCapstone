// @ts-nocheck

import { getDatabase, ref, set } from "firebase/database";
import { app } from './Config.js'




export default function writeNewUser(userId, password, email, f, l) {
  const db = getDatabase(app);

  return new Promise ((resolve, reject) => {
        set(ref(db, 'users/' + userId), {email: email, password: password, firstName: f, lastName: l, uid: userId })
            .then(() => resolve(true))
            .catch(() => resolve(false));
  })
  
}




