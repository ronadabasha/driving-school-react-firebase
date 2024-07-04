import React from "react";
import { useTests } from "../hooks/use-tests";
import { Link, useParams } from "react-router-dom";
import { QUESTIONS } from "../routes";

function TestsList() {
  const { categoryId } = useParams();
  const tests = useTests(Number(categoryId));

  return (
    <div className="flex flex-wrap max-w-screen-xl mx-auto py-20">
      {tests?.map((test, index) => {
        return (
          <Link
            key={test.id}
            to={QUESTIONS + "/" + categoryId + "/" + test.id}
            className="text-lg font-urbanist font-semibold text-center border border-ds-black hover:bg-ds-black hover:text-white color-white w-[150px] py-2 mr-10 mb-5"
          >
            Test {index + 1}
          </Link>
        );
      })}
    </div>
  );
}

export default TestsList;
