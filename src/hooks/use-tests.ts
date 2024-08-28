import { useEffect, useState } from "react";
import { getTests } from "../services/tests";
import { Test } from "../models";

function useTests() {
    const [tests, setTests] = useState<Test[]>();

    useEffect(() => {
        (async () => {
            getTests(setTests)
            const unsubscribe = getTests(setTests);
            return unsubscribe;
        })()
    }, []);

    return tests;
}

export { useTests };