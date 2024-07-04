import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuestions } from "../hooks/use-questions";
import { TESTS_LIST } from "../routes";
import { TestResult, Question } from "../models";
import Modal from "../components/modal";

function Questions() {
  const { testId, categoryId } = useParams();
  const questions = useQuestions(Number(testId));
  const [currentQuestion, setCurrentQuestion] = useState<{
    id: number | null;
    index: number;
  }>({ id: null, index: 0 });
  const [testResult, setTestResult] = useState<TestResult[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);

  useEffect(() => {
    handleQuestionsColors(questions ? questions[0] : null, 0);
  }, [testCompleted]);

  useEffect(() => {
    handleChecked();
  }, [currentQuestion]);

  function handleAnswer(
    question: Question,
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    const answer = e.target.value === "true" ? true : false;
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
        correct: question.answer === answer,
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
          className={`text-2xl font-urbanist font-medium text-white w-full absolute top-0 left-0 p-5 ${
            wrongAnswers > 4 ? "bg-ds-red" : "bg-green-500"
          }`}
        >
          {wrongAnswers > 4
            ? "You didn't pass the test!"
            : "Congratulations, you won!"}
        </p>
        <p className="text-xl">Correct Answers: {correctAnswers}</p>
        <p className="text-xl">
          Wrong Answers: {questions?.length - correctAnswers}
        </p>
        <p className="text-lg mt-8 text-gray-600 font-urbanist italic">
          ** Test time: 4 min **
          {/* todo add countdown time */}
        </p>
      </div>
    ) : null;
  }

  return questions?.length ? (
    <div className="max-w-screen-xl mx-auto pt-[70px] sm:py-20 px-6 sm:pl-6 sm:pr-0">
      <div className="mb-6 pb-2 mr-0 sm:mr-6 border-b border-ds-black">
        {questions?.map((question, index) => {
          return (
            <button
              key={question.id}
              onClick={() =>
                setCurrentQuestion({ id: question.id, index: index })
              }
              className={`text-xl rounded-lg mb-4 mr-5 w-10 h-10 border border-ds-black ${handleQuestionsColors(
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
              <div className="p-5 bg-white rounded-lg">
                <img
                  className="w-full sm:w-auto"
                  src={"../../images/questions/" + question.id + ".png"}
                  alt={question.id + ".png"}
                />
              </div>
              <div className="w-full sm:px-5 py-6">
                <h1 className="mb-8 font-urbanist font-semibold text-lg md:text-2xl text-ds-black">
                  {index + 1 + "." + question.description}
                </h1>
                <div className="flex">
                  <span className="block w-full bg-white py-3 px-5 rounded-lg mr-3">
                    <input
                      type="radio"
                      value="true"
                      defaultChecked={
                        testResult.find(
                          (item) => item.questionId === currentQuestion.id
                        )?.answer === true
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
                      defaultChecked={
                        testResult.find(
                          (item) => item.questionId === currentQuestion.id
                        )?.answer === false
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
      <div className="flex flex-col sm:flex-row justify-between border-t border-ds-black sm:mt-6 sm:mr-6 sm:ml-0 pt-6">
        <Link
          to={TESTS_LIST + "/" + categoryId}
          className="order-last sm:order-first text-lg font-urbanist font-semibold text-center border border-ds-black hover:bg-ds-black hover:text-white color-white w-full sm:w-[150px] py-2 mb-5"
        >
          Tests List
        </Link>
        <div>
          <button
            className={`text-lg font-urbanist font-semibold text-center border border-ds-black color-white w-full sm:w-[150px] py-2 sm:ml-6 mb-5 ${
              currentQuestion.index === 0
                ? "opacity-30"
                : "opacity-1 hover:bg-ds-black hover:text-white"
            }`}
            disabled={currentQuestion.index === 0 ? true : false}
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className={`text-lg font-urbanist font-semibold text-center border border-ds-black color-white w-full sm:w-[150px] py-2 sm:ml-6 mb-5 ${
              currentQuestion.index === questions.length - 1
                ? "opacity-30"
                : "opacity-1 hover:bg-ds-black hover:text-white"
            }`}
            disabled={
              currentQuestion.index === questions.length - 1 ? true : false
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
  ) : null;
}

export default Questions;