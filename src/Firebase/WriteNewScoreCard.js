// @ts-nocheck
import { app } from './Config.js'
import { getDatabase, ref, child, push, update, set } from "firebase/database";




export default function WriteNewScoreCard(scoreCard, userId) {
  const db = getDatabase(app);
  var date = scoreCard.date
  return new Promise ((resolve, reject) => {
        set(ref(db, 'users/28Fwgpui6eQIsPaW1G71VhvjRmm1/'  +date), {scoreCard})
            .then(() => resolve(true))
            .catch(() => resolve(false));
  })
}

