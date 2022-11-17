// @ts-nocheck
import { getDatabase, ref, onValue, get, update, remove} from "firebase/database";
import { app } from './Config.js'


const ReadRecords = async () =>{
    const db = getDatabase(app);
    const records = ref(db, 'users/HEOJyumInrP5loAbg2ZhnCJEuoF2/');
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

const DeleteRecord = async (key) =>{
    const db = getDatabase(app);
    return remove(ref(db, '/users/HEOJyumInrP5loAbg2ZhnCJEuoF2/scoreCards/' +key+'/'))
} 
export {DeleteRecord}






 