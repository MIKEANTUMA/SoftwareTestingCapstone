// @ts-ignore
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './Config'
 
 
 
export function authUser(email, password) {
    const auth = getAuth(app)
    return new Promise((resolve, reject) => {
        // @ts-ignore
        createUserWithEmailAndPassword(auth, email, password)
            .then((data) => resolve(data))
            .catch(() => resolve(false));
    });                                 
}
