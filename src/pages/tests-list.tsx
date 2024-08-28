import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTests } from "../hooks/use-tests";
import { QUESTIONS } from "../routes";

function TestsList() {
  const tests = useTests();

  return (
    <div className="bg-ds-grey-light lg:min-h-screen">
      <div className="flex flex-wrap max-w-screen-xl mx-auto py-10 md:py-20 px-4">
        {tests?.map((test, index) => {
          return (
            <Link
              key={test.id}
              to={QUESTIONS + "/" + test.id}
              className="text-lg font-urbanist font-semibold text-center border border-ds-black hover:bg-ds-black hover:text-white color-white w-[150px] py-2 mr-4 mb-5"
            >
              Test {index + 1}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TestsList;
