import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Location, Email } from "./icons";
import Logo from "./logo";
import { Link } from "react-router-dom";

function TopBar() {
  const [fixedTopbarOnScroll, setFixedTopbarOnScroll] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 50) {
  //       setFixedTopbarOnScroll(true);
  //     }
  //   });

  //   //return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  return (
    <div
      className={`flex justify-between bg-ds-red mx-auto font-manrope font-normal`}
    >
      <div className="flex justify-between bg-ds-black lg:bg-white pl-4 xl:pl-20">
        <Logo customStyle="h-[50px] w-auto py-[8px] flex lg:hidden" />

        <ul className="hidden lg:flex items-center mr-40 pt-[10px]">
          <li className="inline-block mx-1">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
          </li>
          <li className="inline-block mx-1">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </li>
        </ul>
        <div className="relative">
          <div className="absolute top-0 left-0 border-[25px] border-t-ds-black lg:border-t-white border-l-ds-black lg:border-l-white border-r-transparent border-b-transparent -mr-[50px]"></div>
          <div className="flex items-center h-[50px] bg-ds-red pl-[55px] lg:pl-[45px] xl:pl-20 text-white text-sm font-manrope font-semibold">
            <Link to="/">Driving School Name </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-between pb-[11px] pt-[14px] pr-20 text-white font-manrope font-semibold text-sm">
        <a
          target="_blank"
          href="http://maps.apple.com/maps?q=41.326861076222436, 19.822800721202288"
          className="flex mr-12 hover:underline"
          rel="noreferrer"
        >
          <span className="inline-block pt-[3px]">
            <Location />
          </span>{" "}
          <span className="ml-3">Tirana, Albania</span>
        </a>
        <a href="mailto:test@company.com" className="flex hover:underline">
          <span className="inline-block pt-[2px]">
            <Email />
          </span>{" "}
          <span className="ml-3">test@company.com</span>
        </a>
      </div>
    </div>
  );
}

export default TopBar;
