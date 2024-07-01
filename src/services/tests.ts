
import { query, collection, getDocs, where, doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { Test } from '../models/test';

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

async function getTests(categoryId: number, callback: ([{id, categoryId, questions}]: Test[]) => void) {
    const q = query(collection(db, "tests"), where("categoryId", "==", categoryId));
    const querySnapshot = await getDocs(q);
    const tests = querySnapshot.docs.map((test) => ({
        id: test.data().id,
        categoryId: test.data().categoryId,
        questions: test.data().questions
    }));
    console.log("tests", tests)
    callback(tests);
}

export { getTests, getTestById }
