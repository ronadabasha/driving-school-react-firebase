import React, { useEffect, useRef } from "react";
//import gsap from "gsap";
//import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Avatar,
  Car,
  ChevronLeftDouble,
  ChevronRightDouble,
  Document,
  Work,
} from "../components/icons";
import { Link } from "react-router-dom";
import Id from "../components/icons/id";
import Photo from "../components/icons/photo";
import SectionTitle from "../components/section-title";
import { useCategories } from "../hooks/use-categories";
//gsap.registerPlugin(ScrollTrigger);

const ourValues = [
  {
    label: "+15 Years Experience",
    icon: <Work />,
  },
  {
    label: "10 Instructors",
    icon: <Avatar />,
  },
  {
    label: "+2500 Patents Issued",
    icon: <Document color="#ffffff" className="h-[40px]" />,
  },
  {
    label: "8 Vehicles",
    icon: <Car />,
  },
];

const documents = [
  {
    label: "Identification document",
    icon: <Id className="h-[80px] md:h-[150px]" />,
  },
  {
    label: "4 photographs, measuring 4 x 5 cm",
    icon: <Photo className="h-[80px] md:h-[150px]" />,
  },
  {
    label: "Medical certificate with photo",
    icon: <Document color="#000000" className="h-[80px] md:h-[150px]" />,
  },
];

function Home() {
  const categories = useCategories();
  // const elRef = useRef(null);

  // useEffect(() => {
  //   const el = elRef.current;
  //   gsap.to(el, { y: 20, duration: 1, scrollTrigger: { trigger: el } });
  // }, []);

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
      <div className="px-4 max-w-screen-xl mx-auto z-10">
        <div className="flex justify-between -mt-5 bg-ds-black py-8 px-12">
          {ourValues.map((item) => {
            return (
              <span
                key={item.label}
                className="flex items-center text-white text-md font-semibold px-2"
              >
                {item.icon} <span className="ml-4">{item.label}</span>
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center max-w-screen-xl py-20 mx-auto font-urbanist font-bold">
        <SectionTitle
          firstLabel="Courses"
          secondLabel="Courses that we offer"
        />
        <div className="text-white flex flex-col sm:flex-row">
          {categories?.map((category) => (
            <div key={category.id} className="flex-1 px-4 mb-5 sm:mb-0 ">
              <Link to="/">
                <img
                  src={`./images/tests/img-${category.id + 1}.jpg`}
                  alt="img-2"
                />
                <div className="bg-ds-black px-7 ">
                  <span className="block py-4 px-3">{category.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row relative mx-auto text-ds-black font-urbanist font-bold bg-ds-grey-light">
        <div className="w-full lg:w-1/2">
          <img src="/bg-tests.jpg" alt="bg-tests" className="w-full" />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 justify-center p-20">
          <SectionTitle
            firstLabel="Tests"
            secondLabel="You can take example tests in the driving school application"
          />
          <div className="flex flex-col">
            {categories?.map((category) => (
              <Link
                key={category.id}
                to={`/tests-list/${category.id}`}
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
          className="w-[300px] h-auto absolute right-20 bottom-20 opacity-30 -z-0"
        />
      </div>
      <div className="flex flex-col items-center text-center w-full max-w-screen-xl py-12 md:py-20 mx-auto text-ds-black font-urbanist font-bold">
        <SectionTitle
          firstLabel="Documents"
          secondLabel="Documents for registration"
        />
        <div className="flex flex-col sm:flex-row w-full px-4">
          {documents.map((item) => {
            return (
              <div
                key={item.label}
                className="flex flex-col w-full items-center mb-5 md:mb-0 p-5 lg:p-10 lg:mx-4 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)]"
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
