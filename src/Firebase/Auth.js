const  getAuth = require("firebase/auth")
const createUserWithEmailAndPassword  = require("firebase/auth");
const  app = require('./Config')
 
 
 
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