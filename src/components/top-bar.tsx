import React from "react";
import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";

function TopBar() {
  return (
    <div className="flex justify-between bg-ds-red mx-auto font-manrope font-normal">
      <div className="flex items-between bg-white pl-20">
        <div className="relative">
          <ul className="flex items-center mr-[25px] pt-[10px]">
            <li className="inline-block mx-1">
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li className="inline-block mx-1">
              <a href="#">
                <Instagram />
              </a>
            </li>
          </ul>
          <div className="absolute top-0 right-0 border-[25px] border-t-white border-l-white border-r-transparent border-b-transparent -mr-[48px]"></div>
        </div>
        <div className="flex items-center h-[50px] bg-ds-red pl-20 text-white text-sm font-manrope font-semibold">
          <p>Mon to Sat: 08:00 - 18:00 </p>
        </div>
      </div>
      <div className="flex items-between pb-[11px] pt-[14px] pr-20 text-white font-manrope font-semibold text-sm">
        <a
          href="tel:00355122343456"
          className="inline-block mr-12 hover:underline"
        >
          +355122343456
        </a>
        <a
          href="mailto:test@company.com"
          className="inline-block hover:underline"
        >
          test@company.com
        </a>
      </div>
    </div>
  );
}

export default TopBar;
