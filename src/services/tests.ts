
import { query, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { Test } from '../models';

async function getTestById(testId: number) {
  const docRef = doc(db, "tests", testId + "");
  try {
    const docSnap = await getDoc(docRef);
    return docSnap.data()
  } catch(error) {
      console.log(error)
  }
  return null
}

async function getTests(callback: ([{id, questions}]: Test[]) => void) {
    const q = query(collection(db, "tests"));
    const querySnapshot = await getDocs(q);
    const tests = querySnapshot.docs.map((test) => ({
        id: test.data().id,
        questions: test.data().questions
    }));
    callback(tests);
}

export { getTests, getTestById }
