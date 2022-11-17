// @ts-nocheck
import { app } from './Config.js'

import { getDatabase, ref, child, push, update } from "firebase/database";




// export default function WriteNewScoreCard(scoreCard, userId) {
//   console.log('SCORECARD ', scoreCard)


//const db = getDatabase(app);
// return new Promise ((resolve, reject) => {
//   var date = scoreCard.date
//       set(ref(db, 'users/s7jfixsLdgOF1VpPxDFbPcFvvLv2/scoreCard'), {scoreCard})
//           .then(() => resolve(true))
//           .catch(() => resolve(false));
// })
//}

export const WriteNewScoreCard = async (scoreCard, userId) => {
  const db = getDatabase(app);
  console.log("SCORECARD ", scoreCard)
  // Get a key for a new Post.

  return new Promise((resolve, reject) => {
    try {
      const newPostKey = push(child(ref(db), 'scoreCards')).key;
      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      updates['/users/HEOJyumInrP5loAbg2ZhnCJEuoF2/scoreCards/' + newPostKey + '/'] = { scoreCard };

      update(ref(db), updates);
      resolve(true)
    } catch (e) {
      console.log('error ', e)
      reject(true)
    }
  })

}

export const editScoreCard = (scoreCard, key) => {
  const db = getDatabase(app);
  console.log("SCORECARD ", scoreCard)
  // Get a key for a new Post.
  return new Promise((resolve, reject) => {
    try {
      const newPostKey = push(child(ref(db), 'scoreCards')).key;
      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      updates['/users/HEOJyumInrP5loAbg2ZhnCJEuoF2/scoreCards/' + key + '/'] = { scoreCard };

      update(ref(db), updates);
      resolve(true)
    } catch (e) {
      console.log('error ', e)
      reject(true)
    }
  })
}