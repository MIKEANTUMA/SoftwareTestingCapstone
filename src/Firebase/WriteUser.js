// @ts-nocheck

import { getDatabase, ref, set } from "firebase/database";
import { app } from './Config.js'




export default function writeNewUser(userId,name, email, password, f, l, dob) {
  const db = getDatabase(app);

  return new Promise ((resolve, reject) => {
        set(ref(db, 'users/' + userId), {userName: name, email: email, password: password, firstName: f, lastName: l, DoB: dob})
            .then(() => resolve(true))
            .catch(() => resolve(false));
    })
  
}




