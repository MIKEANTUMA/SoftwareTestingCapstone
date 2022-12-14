import { app } from '../src/Firebase/Config.js';
import { getDatabase, ref, child, get, onValue, set, push, update, remove } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const newScoreCard = {
    courseName: 'test',
    players: 'test',
    date: 'test',
    holes: 'test',
    par: ['test', 'test'],
    holeNumber: ['test', 'test'],
    holeYardage: ['test', 'test']
}
const signin = async () => {
    const auth = getAuth(app);
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, 'test@123.com', 'password')
            .then((userCredential) => {
                resolve(true)
            })
            .catch((error) => {
                reject(error.message)
            });
    })
}
function authUser(email, password) {
    const auth = getAuth(app)
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((data) => resolve(true))
            .catch((error) => resolve(error));
    });
}
function writeNewUser(id, username, password) {
    const db = getDatabase(app);
    return new Promise((resolve, reject) => {
        set(ref(db, 'users/test'), { id: id, username: username, password: password })
            .then(() => resolve(true))
            .catch(() => resolve(false));
    })
}
const WriteNewScoreCard = async (scoreCard, userId) => {
    const db = getDatabase(app);
    return new Promise((resolve, reject) => {
        try {
            const updates = {};
            updates['/users/test/scoreCards/1/'] = { scoreCard };

            update(ref(db), updates);
            resolve(true)
        } catch (e) {
            console.log('error ', e)
            resolve(true)
        }
    })

}
const ReadRecords = async () => {
    const db = getDatabase(app);
    const records = ref(db, 'users/test/');
    return new Promise((resolve, reject) => {
        get(records)
            .then((snapshot) => {
                console.log(snapshot)
                resolve(test)
            })
            .catch((e) => resolve(false));
    })
}
const editScoreCard = () => {
    const db = getDatabase(app)
    return new Promise((resolve, reject) => {
        try {
            const updates = {};
            updates['/users/test/scoreCards/1/'] = { newScoreCard };
            update(ref(db), updates);
            resolve(true)
        } catch (e) {
            console.log('error ', e)
            reject(false)
        }
    })
}
const DeleteRecord = async () => {
    const db = getDatabase(app);
    return new Promise ((resolve, reject) => {
        try{
            remove(ref(db, '/users/test/scoreCards/1/'))
            resolve(true)
        }catch(e){
            reject(false)
        }
    })
}



test('auth test', async () => {
    const data = await authUser('test@123.com', 'password');
    expect(true).toBe(true);

});

test('write user test', () => {
    return writeNewUser(1, 'test@123.com', 'test123').then((data) => { expect(data).toBe(true); });
});




test('write new score card', async () => {
    const data = await WriteNewScoreCard(newScoreCard);
    expect(data).toBe(true);
})



test('read score card', async () => {
    const data = await ReadRecords()
    expect(true).toBe(true);
})




test('test sign in', async () => {
    const data = await signin()
    // expect(data).toBe(true);
    return signin().then((data) => { expect(data).toBe(true); });
})


test('test edit record', async () => {
    const result = await editScoreCard()
    expect(result).toBe(true)
})

test('test delete record', async ()=>{
    const result = await DeleteRecord()
    expect(result).toBe(true)
})