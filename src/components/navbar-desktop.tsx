import React from "react";
import { Phone } from "./icons";
import Logo from "./logo";
import { Link } from "react-router-dom";

function NavbarDesktop() {
  return (
    <div className="hidden lg:flex justify-between bg-white mx-auto font-urbanist font-normal">
      <div className="flex">
        <div className="relative py-[30px] bg-ds-black pl-[10px] xl:pl-20 pr-[167px] xl:pr-[159px]">
          <Logo customStyle="h-[50px] w-auto ml-5" />
          <div className="absolute top-0 right-0 border-[56px] border-t-transparent border-l-transparent border-r-white border-b-white"></div>
        </div>
        <nav className="bg-white pl-[40px] xl:pl-0 ml-0 xl:ml-[80px] 2xl:ml-[73px] py-[30px]">
          <ul className="text-base font-bold mt-[10px] text-ds-grey">
            <li className="inline-block mx-1 xl:mr-3">
              <Link to="/">Home</Link>
            </li>
            <li className="inline-block mx-1 xl:mx-3">
              <Link to="/about">About</Link>
            </li>
            <li className="inline-block mx-1 xl:mx-3">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="inline-block mx-1 xl:mx-3">
              <Link to="/tests">Tests</Link>
            </li>
            <li className="inline-block mx-1 xl:mx-3">
              <Link to="/latest-news">Latest News</Link>
            </li>
            <li className="inline-block mx-1 xl:mx-3">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="relative bg-ds-black pl-[150px] pr-20 2xl:px-[200px] pt-[45px]">
        <div className="absolute top-0 left-0 border-[56px] border-t-white border-l-white border-r-transparent border-b-transparent"></div>
        <a
          href="tel:00355122343456"
          className="flex text-white mr-0 hover:underline"
        >
          <span className="inline-block pt-[2px]">
            <Phone />
          </span>{" "}
          <span className="ml-3"> +355122343456</span>
        </a>
        <div className="absolute bottom-0 right-0 border-[10px] border-t-transparent border-l-transparent border-r-white border-b-white"></div>
      </div>
    </div>
  );
}

export default NavbarDesktop;
