import { query, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { Category } from '../models';

async function getCategories(callback: ([{id, name}]: Category[]) => void) {
    const q = query(collection(db, "categories"));
    const querySnapshot = await getDocs(q);
    const categories = querySnapshot.docs.map((category) => ({
        id: category.data().id,
        name: category.data().name,
    }));
    callback(categories);
}

export { getCategories }