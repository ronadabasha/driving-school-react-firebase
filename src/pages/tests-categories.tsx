import React from "react";
import { Link } from "react-router-dom";
import { TESTS_LIST } from "../routes";

function TestsCategories() {
  return (
    <div className="bg-ds-grey-light lg:min-h-screen">
      <div className="flex max-w-screen-xl mx-auto py-20 text-white font-urbanist font-bold">
        <div className="flex-1 px-4">
          <Link to={TESTS_LIST + "/0"}>
            <img src="./images/tests/img-1.jpg" alt="img-1" />
            <div className="bg-ds-black px-7">
              <p className="bg-white text-ds-black font-urbanist font-bold p-3 -mt-6 relative">
                Tests list for categories
              </p>
              <span className="block py-4 px-3">A, A1, B, B1</span>
            </div>
          </Link>
        </div>
        <div className="flex-1 px-4">
          <Link to={TESTS_LIST + "/1"}>
            <img src="./images/tests/img-2.jpg" alt="img-2" />
            <div className="bg-ds-black px-7 ">
              <p className="bg-white text-ds-black font-urbanist font-bold p-3 -mt-6 relative">
                Tests list for categories
              </p>
              <span className="block py-4 px-3">C1, C</span>
            </div>
          </Link>
        </div>
        <div className="flex-1 px-4">
          <Link to={TESTS_LIST + "/2"}>
            <img src="./images/tests/img-3.jpg" alt="img-3" />
            <div className="bg-ds-black px-7 ">
              <p className="bg-white text-ds-black font-urbanist font-bold p-3 -mt-6 relative">
                Tests list for categories
              </p>
              <span className="block py-4 px-3">D1, D</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TestsCategories;
