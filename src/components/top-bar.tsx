import React from "react";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { otherInfo, SocialLinks, socialLinks } from "../data/contact";

function TopBar() {
  return (
    <div
      className={`flex justify-between bg-ds-red mx-auto font-manrope font-normal`}
    >
      <div className="flex justify-between bg-ds-black lg:bg-white pl-4 xl:pl-20">
        <Logo customStyle="h-[50px] w-auto py-[8px] flex lg:hidden" />

        <ul className="hidden lg:flex items-center mr-40 pt-[10px]">
          {socialLinks.map((item: SocialLinks) => {
            return (
              <li key={item.link} className="inline-block mx-1">
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="relative">
          <div className="absolute top-0 left-0 border-[25px] border-t-ds-black lg:border-t-white border-l-ds-black lg:border-l-white border-r-transparent border-b-transparent -mr-[50px]"></div>
          <div className="flex items-center h-[50px] bg-ds-red pl-[55px] lg:pl-[45px] xl:pl-20 text-white text-sm font-manrope font-semibold">
            <Link to="/">{otherInfo.brand.label}</Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-between pb-[11px] pt-[14px] pr-20 text-white font-manrope font-semibold text-sm">
        <a
          target="_blank"
          href={otherInfo.location.link}
          className="flex mr-12 hover:underline"
          rel="noreferrer"
        >
          <span className="inline-block pt-[3px]">
            {otherInfo.location.icon}
          </span>{" "}
          <span className="ml-3">{otherInfo.location.label}</span>
        </a>
        <a href="mailto:test@company.com" className="flex hover:underline">
          <span className="inline-block pt-[2px]">{otherInfo.email.icon}</span>
          <span className="ml-3">{otherInfo.email.label}</span>
        </a>
      </div>
    </div>
  );
}

export default TopBar;
