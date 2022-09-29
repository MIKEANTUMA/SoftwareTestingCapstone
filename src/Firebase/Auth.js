import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './Config'
 
 
 
function authUser(email, password) {
    const auth = getAuth(app)
    let a = false
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => resolve(true))
            .catch(() => resolve(false));
    });                                 
}

module.exports = authUser