import React, { useEffect, useState } from "react";
import { useQuestions } from "../hooks/useQuestions";
import { Link, useParams } from "react-router-dom";
import { TESTS_LIST } from "../routes";
import { Answer } from "../models/answer";
import { TestResult } from "../models/testResult";
import { Question } from "../models/question";

function Questions() {
  const { testId } = useParams();
  const questions = useQuestions(Number(testId));
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [testResult, setTestResult] = useState<TestResult[]>([]);
  const [testCompleted, setTestCompleted] = useState<boolean>(false);

  useEffect(() => {
    handleQuestionsColors(questions ? questions[0] : null);
  }, [testCompleted]);

  function handleAnswer(
    question: Question,
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    const answer = e.target.value === "true" ? true : false;
    const newAnswers: TestResult[] = [];
    newAnswers.push(...testResult, {
      questionId: question.id,
      answer: answer,
      correct: question.answer === answer,
    });
    setAnswers(newAnswers);
    setTestResult(newAnswers);
  }

  function handleTestComplete(): void {
    const results: TestResult[] = [];
    questions?.forEach((question) => {
      answers.find((item) => {
        if (item.questionId === question.id)
          results.push({
            questionId: question.id,
            answer: item.answer,
            correct: question.answer === item.answer,
          });
      });
      setTestCompleted(true);
    });
    setCurrentQuestion(0);
  }

  function handleQuestionsColors(question: Question | null): string {
    if (question == null) return "";
    if (!testCompleted && question.id === currentQuestion) {
      return "text-white bg-ds-black";
    } else if (!testCompleted && question.id !== currentQuestion) {
      return "text-ds-black bg-ds-white";
    } else {
      return testResult.find((item) => item.questionId === question.id)
        ?.correct === true
        ? "text-white bg-green-500"
        : "text-white bg-ds-red";
    }
  }

  return questions?.length ? (
    <div className="max-w-screen-xl mx-auto py-20 px-6 sm:pl-6 sm:pr-0">
      <div className="mb-6 pb-2 mr-0 sm:mr-6 border-b border-ds-black">
        {questions?.map((question, index) => {
          return (
            <button
              key={question.id}
              onClick={() => setCurrentQuestion(index)}
              className={`text-xl rounded-lg mb-4 mr-5 w-10 h-10 border border-ds-black ${handleQuestionsColors(
                question
              )}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      {questions?.map((question, index) => {
        return (
          currentQuestion === question.id && (
            <div key={question.id} className="flex flex-col sm:flex-row">
              <div className="p-5 bg-white rounded-lg">
                <img
                  className="w-full sm:w-auto"
                  src={"../../images/questions/" + question.id + ".png"}
                  alt={question.id + ".png"}
                />
              </div>
              <div className="p-5">
                <h1 className="mb-8 font-urbanist font-semibold text-lg md:text-2xl text-ds-black">
                  {index + 1 + "." + question.description}
                </h1>
                <div className="flex">
                  <span className="block w-full bg-white py-3 px-5 rounded-lg mr-3">
                    <input
                      type="radio"
                      value="true"
                      checked={
                        answers.find((item) => item.questionId === question.id)
                          ?.answer === true
                          ? true
                          : false
                      }
                      name="answer"
                      onChange={(e) => handleAnswer(question, e)}
                    />{" "}
                    True
                  </span>
                  <span className="block w-full bg-white py-3 px-5 rounded-lg ml-3">
                    <input
                      type="radio"
                      value="false"
                      checked={
                        answers.find((item) => item.questionId === question.id)
                          ?.answer === false
                          ? true
                          : false
                      }
                      name="answer"
                      onChange={(e) => handleAnswer(question, e)}
                    />{" "}
                    False
                  </span>
                </div>
              </div>
            </div>
          )
        );
      })}
      <div className="flex flex-col sm:flex-row justify-between border-t border-ds-black mt-6 mx-6 sm:mr-6 sm:ml-0 pt-6">
        <Link
          to={TESTS_LIST + "/0"} //todo change
          className="order-last sm:order-first text-lg font-urbanist font-semibold text-center border border-ds-black hover:bg-ds-black hover:text-white color-white w-full sm:w-[150px] py-2 mb-5"
        >
          Tests List
        </Link>
        <div>
          <button
            className={`text-lg font-urbanist font-semibold text-center border border-ds-black color-white w-full sm:w-[150px] py-2 sm:ml-6 mb-5 ${
              currentQuestion === 0
                ? "opacity-30"
                : "opacity-1 hover:bg-ds-black hover:text-white"
            }`}
            disabled={currentQuestion === 0 ? true : false}
            onClick={() =>
              setCurrentQuestion(
                currentQuestion > 0 ? currentQuestion - 1 : currentQuestion
              )
            }
          >
            Back
          </button>
          <button
            className={`text-lg font-urbanist font-semibold text-center border border-ds-black color-white w-full sm:w-[150px] py-2 sm:ml-6 mb-5 ${
              currentQuestion === 3
                ? "opacity-30"
                : "opacity-1 hover:bg-ds-black hover:text-white"
            }`}
            disabled={currentQuestion === 3 ? true : false} //todo change
            onClick={() =>
              setCurrentQuestion(
                currentQuestion < questions?.length
                  ? currentQuestion + 1
                  : currentQuestion
              )
            }
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex justify-end mr-6">
        <button
          className={`text-lg font-urbanist font-semibold text-center text-white bg-ds-red w-full sm:w-[325px] color-white py-2 px-6 ml-6 mb-5 ${
            testCompleted ? "opacity-30" : "opacity-1 hover:opacity-75 "
          }`}
          disabled={testCompleted}
          onClick={handleTestComplete}
        >
          Complete the Test
        </button>
      </div>
    </div>
  ) : null;
}

export default Questions;
