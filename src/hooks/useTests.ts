import { useEffect, useState } from "react";
import { getTests } from "../services/tests";
import { Test } from "../models/test";

function useTests(categoryId: number) {
    const [tests, setTests] = useState<Test[]>();

    useEffect(() => {
        (async () => {
            getTests(categoryId, setTests)
            const unsubscribe = getTests(categoryId, setTests);
            return unsubscribe;
        })()
    }, [categoryId]);

    return tests;
}

export { useTests };