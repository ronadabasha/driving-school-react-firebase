import React from "react";

function Courses() {
  return (
    <div className="flex max-w-screen-xl mx-auto py-20 text-white font-urbanist font-bold">
      <div className="flex-1 px-4">
        <div className="bg-ds-black">
          <a href="questions">
            <img src="./images/tests/img-1.jpg" alt="img-1" />
            <span className="block py-4 px-7">A, A1, B, B1</span>
          </a>
        </div>
      </div>
      <div className="flex-1 px-4">
        <div className="bg-ds-black">
          <a href="questions">
            <img src="./images/tests/img-2.jpg" alt="img-2" />
            <span className="block py-4 px-7">C1, C</span>
          </a>
        </div>
      </div>
      <div className="flex-1 px-4">
        <div className="bg-ds-black">
          <a href="questions">
            <img src="./images/tests/img-3.jpg" alt="img-3" />
            <span className="block py-4 px-7">D1, D</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Courses;
