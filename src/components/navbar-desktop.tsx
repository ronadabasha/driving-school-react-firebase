import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import { otherInfo } from "../data/contact";
import { Routes, routes } from "../data/routes";

function NavbarDesktop() {
  return (
    <div className="hidden lg:flex justify-between bg-white mx-auto font-urbanist font-normal">
      <div className="flex">
        <div className="relative py-[30px] bg-ds-black pl-[10px] xl:pl-20 pr-[167px] xl:pr-[159px]">
          <div className="ml-5">
            <Logo customStyle="h-[50px] w-auto" />
          </div>
          <div className="absolute top-0 right-0 border-[55px] border-t-transparent border-l-transparent border-r-white border-b-white"></div>
        </div>
        <nav className="bg-white pl-[40px] xl:pl-0 ml-0 xl:ml-[80px] 2xl:ml-[73px] py-[30px]">
          <ul className="text-base font-bold mt-[10px] text-ds-grey">
            {routes.map((item: Routes) => {
              return (
                <li key={item.label} className="inline-block mx-3">
                  <Link to={item.path}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="relative bg-ds-black pl-[150px] pr-20 2xl:px-[200px] pt-[45px]">
        <div className="absolute top-0 left-0 border-[55px] border-t-white border-l-white border-r-transparent border-b-transparent"></div>
        <a
          href={`tel:00${otherInfo.phone.label}`}
          className="flex text-white mr-0 hover:underline"
        >
          <span className="inline-block pt-[2px]">{otherInfo.phone.icon}</span>
          <span className="ml-3"> +{otherInfo.phone.label}</span>
        </a>
        <div className="absolute bottom-0 right-0 border-[10px] border-t-transparent border-l-transparent border-r-white border-b-white"></div>
      </div>
    </div>
  );
}

export default NavbarDesktop;
