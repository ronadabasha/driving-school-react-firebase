import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightDouble } from "../components/icons";
import SectionTitle from "../components/section-title";
import { useCategories } from "../hooks/use-categories";
import { documents, ourValues } from "../data/home";

function Home() {
  const categories = useCategories();

  return (
    <div>
      <div className="relative -z-10">
        <img
          className="w-full"
          src="./banner.jpg"
          alt="driving school banner"
        />
        <div className="bg-[#0000006e] absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className="hidden sm:block px-4 max-w-screen-xl mx-auto z-10">
        <div className="flex justify-between -mt-5 bg-ds-black py-8 px-12">
          {ourValues.map((item) => {
            return (
              <span
                key={item.label}
                className="flex items-center text-white text-md font-semibold px-2"
              >
                {item.icon}{" "}
                <span className="ml-2 lg:ml-4 flex">
                  {item.number + " "}
                  <span className="hidden lg:block ml-1">{item.label}</span>
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center max-w-screen-xl pt-12 pb-7 md:py-20 mx-auto font-urbanist font-bold">
        <SectionTitle
          firstHeader="Courses"
          secondHeader="Courses that we offer"
        />
        <div className="text-white flex px-4 md:px-2 flex-col sm:flex-row">
          {categories?.map((category) => (
            <div
              key={category.id}
              className="flex-1 sm:mx-2 lg:mx-4 mb-5 sm:mb-0 "
            >
              <Link to="/">
                <img
                  src={`./images/tests/img-${category.id + 1}.jpg`}
                  alt="img-2"
                />
                <div className="bg-ds-black px-4 md:px-7 ">
                  <span className="block py-4 md:px-3">{category.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row relative mx-auto text-ds-black font-urbanist font-bold bg-ds-grey-light ">
        <div className="w-full bg-white hidden lg:block lg:w-1/2">
          <img
            src="/bg-tests.jpg"
            alt="bg-tests"
            className="w-full max-w-[800px] mx-auto py-10"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-center lg:items-start py-12 lg:py-0 px-4 lg:px-20">
          <SectionTitle firstHeader="Tests" secondHeader="Take example tests" />
          <div className="flex flex-col w-full">
            {categories?.map((category) => (
              <Link
                key={category.id}
                to={`/tests-list`}
                className="flex justify-between text-lg font-urbanist font-semibold text-center border-b border-[#E6E6E6] py-2 mb-4"
              >
                <span className="mr-2">{category.name}</span>
                <ChevronRightDouble />
              </Link>
            ))}
          </div>
        </div>
        <img
          src="/bg-tests-transparent.png"
          alt="bg-tests-transparent"
          className="w-[300px] h-auto absolute right-20 bottom-20 opacity-10 -z-0"
        />
      </div>
      <div className="flex flex-col items-center text-center w-full max-w-screen-xl pt-12 pb-7 md:py-20 mx-auto text-ds-black font-urbanist font-bold">
        <SectionTitle
          firstHeader="Documents"
          secondHeader="Documents for registration"
        />
        <div className="flex flex-col sm:flex-row w-full px-4 md:px-2">
          {documents.map((item) => {
            return (
              <div
                key={item.label}
                className="flex flex-col sm:w-1/3 items-center mb-5 sm:mb-0 p-5 lg:p-10 sm:mx-2 lg:mx-4 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)]"
              >
                {item.icon}
                <p className="pt-5">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
