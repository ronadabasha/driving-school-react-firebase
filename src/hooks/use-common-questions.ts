import { useEffect, useState } from "react";
import { CommonQuestion } from "../models";
import { getCommonQuestions,  } from "../services/questions";

function useCommonQuestions() {
    const [commonQuestions, setCommonQuestions] = useState<CommonQuestion[]>();

    useEffect(() => {
        (async () => {
            getCommonQuestions(setCommonQuestions)
            const unsubscribe = getCommonQuestions(setCommonQuestions);
            return unsubscribe;
        })()
    }, []);

    return commonQuestions;
}

export { useCommonQuestions };