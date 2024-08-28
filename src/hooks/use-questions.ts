import { useEffect, useState } from "react";
import { Question } from "../models";
import { getQuestions } from "../services/questions";
import { getTestById } from "../services/tests";

function useQuestions(testId: number) {
    const [questions, setQuestions] = useState<Question[]>();

    useEffect(() => {
        (async () => {
            const test = await getTestById(testId)
            if(test?.questions){
                getQuestions(test?.questions, setQuestions)
                const unsubscribe = getQuestions(test?.questions, setQuestions);
                return unsubscribe;
            }
        })()
    }, [testId]);

    return questions;
}

export { useQuestions };