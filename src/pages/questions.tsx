import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuestions } from "../hooks/use-questions";
import { TESTS_LIST } from "../routes";
import { TestResult, Question } from "../models";
import Modal from "../components/modal";

function Questions() {
  const { testId } = useParams();
  const questions = useQuestions(Number(testId));
  const [currentQuestion, setCurrentQuestion] = useState<{
    id: number | null;
    index: number;
  }>({ id: null, index: 0 });
  const [testResult, setTestResult] = useState<TestResult[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);

  useEffect(() => {
    handleQuestionsColors(questions ? questions[0] : null, 0);
  }, [testCompleted, questions]);

  useEffect(() => {
    handleChecked();
  }, [currentQuestion]);

  function handleAnswer(
    question: Question,
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    const answer = e.target.value;
    const newAnswers: TestResult[] = testResult;
    let answerIndex = testResult.findIndex(
      (item) => item.questionId === question.id
    );
    if (answerIndex >= 0) {
      newAnswers[answerIndex].answer = answer;
    } else {
      newAnswers.push({
        questionId: question.id,
        answer: answer,
        correct: question.correctAnswer === answer,
      });
    }
    setTestResult(newAnswers);
  }

  function handleTestComplete(): void {
    setTestCompleted(true);
    setCurrentQuestion({ id: null, index: 0 });
  }

  function handleQuestionsColors(
    question: Question | null,
    index: number
  ): string {
    if (question == null) return "";
    if (!testCompleted && index === currentQuestion.index) {
      return "text-white bg-ds-black";
    } else if (!testCompleted && index !== currentQuestion.index) {
      return "text-ds-black bg-ds-white";
    } else {
      return testResult.find((item) => item.questionId === question.id)
        ?.correct === true
        ? "text-white bg-green-500"
        : "text-white bg-ds-red";
    }
  }

  function handleChecked() {
    const index = testResult.findIndex(
      (item) => item.questionId === currentQuestion.id
    );
    if (index >= 0) {
      return testResult[index].answer;
    }
    return;
  }

  function handlePrev() {
    if (questions === undefined) return null;
    const currentQuestionIndex =
      currentQuestion.index > 0
        ? currentQuestion.index - 1
        : currentQuestion.index;
    setCurrentQuestion({
      id: questions[currentQuestionIndex].id,
      index: currentQuestionIndex,
    });
  }

  function handleNext() {
    if (questions === undefined) return null;
    const currentQuestionIndex =
      currentQuestion.index < questions.length
        ? currentQuestion.index + 1
        : currentQuestion.index;
    setCurrentQuestion({
      id: questions[currentQuestionIndex].id,
      index: currentQuestionIndex,
    });
  }

  function TestResultPanel() {
    if (questions === undefined) return null;
    const correctAnswers = testResult.filter((item) => {
      return item.correct === true;
    }).length;
    const wrongAnswers = questions?.length - correctAnswers;

    return questions ? (
      <div className="pt-12">
        <p
          className={`text-xl lg:text-2xl font-urbanist font-medium text-white w-full absolute top-0 left-0 p-5 ${
            wrongAnswers > 4 ? "bg-ds-red" : "bg-green-500"
          }`}
        >
          {wrongAnswers > 4
            ? "You didn't pass the test!"
            : "Congratulations, you won!"}
        </p>
        <p className="text-base lg:text-xl">
          Correct Answers: {correctAnswers}
        </p>
        <p className="text-base lg:text-xl">
          Wrong Answers: {questions?.length - correctAnswers}
        </p>
        {/* <p className="text-sm lg:text-lg mt-8 text-gray-600 font-urbanist italic">
         ** Test time: 4 min ** */}
        {/* todo add countdown time */}
        {/* </p> */}
      </div>
    ) : null;
  }

  return questions?.length ? (
    <div className="bg-ds-grey-light lg:min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-[70px] sm:py-20 px-4 sm:pl-6 sm:pr-0">
        <div className="mb-6 pb-2 sm:mx-5 border-b border-ds-black">
          {questions?.map((question, index) => {
            return (
              <button
                key={question.id}
                onClick={() =>
                  setCurrentQuestion({ id: question.id, index: index })
                }
                className={`text-xl rounded-lg mb-4 mr-5 w-10 h-10 border border-ds-black  ${handleQuestionsColors(
                  question,
                  index
                )}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        {questions?.map((question, index) => {
          return (
            currentQuestion.index === index && (
              <div key={question.id} className="flex flex-col sm:flex-row">
                {question.image && (
                  <div className="p-5 bg-white rounded-lg">
                    <img
                      className="w-full sm:w-auto"
                      src={question.image}
                      alt={question.image}
                    />
                  </div>
                )}
                <div className="w-full sm:px-5 py-6">
                  <h1 className="mb-8 font-urbanist font-semibold text-lg md:text-2xl text-ds-black">
                    {index + 1 + "." + question.description}
                  </h1>
                  <div>
                    {question.answers.map((answer) => {
                      return (
                        <p
                          key={answer}
                          className="w-full bg-white py-3 px-5 rounded-lg mr-3"
                        >
                          <input
                            type="radio"
                            value={answer}
                            defaultChecked={
                              testResult.find(
                                (item) => item.questionId === currentQuestion.id
                              )?.answer === answer
                                ? true
                                : false
                            }
                            name="answer"
                            onChange={(e) => handleAnswer(question, e)}
                            className={`${
                              testCompleted ? "opacity-80" : "opacity-1"
                            }`}
                            disabled={testCompleted}
                          />{" "}
                          {answer}
                        </p>
                      );
                    })}
                  </div>
                  {testCompleted && (
                    <p className="font-bold mt-5">
                      Correct Answer:{" "}
                      <span className="text-green-500 ">
                        {question.correctAnswer}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            )
          );
        })}
        <div className="flex flex-row justify-between border-t border-ds-black sm:mt-6 sm:mx-5 py-6">
          <div className="flex flex-col md:flex-row justify-start">
            <Link
              to={TESTS_LIST}
              className="mr-6 text-lg font-urbanist font-semibold text-center border border-ds-black hover:bg-ds-black hover:text-white color-white w-[150px] py-2 my-2"
            >
              Tests List
            </Link>
            <button
              className={`text-lg font-urbanist font-semibold text-center border border-ds-black color-white w-[150px] py-2 my-2`}
              onClick={() => {
                window.location.reload();
              }}
            >
              Try Again
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-end">
            <button
              className={`text-lg font-urbanist font-semibold text-center border border-ds-black color-white w-[150px] py-2 sm:ml-6 my-2 ${
                currentQuestion.index === 0 || testCompleted
                  ? "opacity-30"
                  : "opacity-1 hover:bg-ds-black hover:text-white"
              }`}
              disabled={currentQuestion.index === 0 || testCompleted}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              className={`text-lg font-urbanist font-semibold text-center border border-ds-black color-white w-[150px] py-2 sm:ml-6 my-2 ${
                currentQuestion.index === questions.length - 1 || testCompleted
                  ? "opacity-30"
                  : "opacity-1 hover:bg-ds-black hover:text-white"
              }`}
              disabled={
                currentQuestion.index === questions.length - 1 || testCompleted
              }
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
        <Modal
          testCompleted={testCompleted}
          onClick={handleTestComplete}
          button="Complete the Test"
          panel={<TestResultPanel />}
        />
      </div>
    </div>
  ) : null;
}

export default Questions;
