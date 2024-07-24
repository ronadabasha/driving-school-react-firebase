
import { query, collection, getDocs, where } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { Question } from '../models';

async function getQuestions(questionIds: Array<number>, callback: ([{id, description, answer}]: Question[]) => void) {
    const q = query(collection(db, "questions"), where('id', 'in', questionIds));
    const querySnapshot = await getDocs(q);
    const questions = querySnapshot.docs.map((question) => ({
        id: question.data().id,
        description: question.data().description,
        answer: question.data().answer
    }));
    callback(questions);
}

async function getCommonQuestions(callback: ([{id, description, answer}]: Question[]) => void) {
    const q = query(collection(db, "common-questions"));
    const querySnapshot = await getDocs(q);
    const questions = querySnapshot.docs.map((question) => ({
        id: question.data().id,
        description: question.data().description,
        answer: question.data().answer
    }));
    callback(questions);
}

export { getQuestions, getCommonQuestions }
