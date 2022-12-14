// @ts-nocheck
import { getDatabase, ref, onValue, get, update, remove} from "firebase/database";
import { app } from './Config.js'


const ReadRecords = async (userId) =>{
    const userUID = localStorage.getItem('userUID')

    const db = getDatabase(app);
    const records = ref(db, 'users/'+userUID+'/');
    console.log('this broke why! users/'+userUID+'/')
    let data
    let recordArray
    return new Promise ((resolve, reject) => { 
        get(records)
        .then((snapshot) => {
            data = snapshot.val()
            //console.log('in this bitch', data.scoreCards)
       
            resolve(data.scoreCards)
            //resolve(true)
        })
        .catch(() => reject(false));
    })
}
export default ReadRecords

const DeleteRecord = async (key, uid) =>{
    const userUID = localStorage.getItem('userUID')
    const db = getDatabase(app);
    return remove(ref(db, '/users/'+userUID+'/scoreCards/' +key+'/'))
} 
export {DeleteRecord}






 