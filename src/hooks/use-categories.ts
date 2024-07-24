import { useEffect, useState } from "react";
import { Category } from "../models";
import { getCategories } from "../services/categories";

function useCategories() {
    const [categories, setCategories] = useState<Category[]>();

    useEffect(() => {
        (async () => {
            getCategories(setCategories)
            const unsubscribe = getCategories(setCategories);
            return unsubscribe;
        })()
    }, []);

    return categories;
}

export { useCategories };