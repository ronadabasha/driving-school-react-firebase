import { Link } from "react-router-dom";
import Logo from "./logo";
import { otherInfo, SocialLinks, socialLinks } from "../data/contact";

function Footer() {
  return (
    <div className="flex bg-ds-black px-5 xl:px-20 w-full">
      <div className="flex w-full flex-col lg:flex-row justify-between items-center py-[50px] border-b border-[#c9cbd159]">
        <div className="flex items-center">
          <Logo customStyle="h-[50px] w-auto ml-5" />
          <Link
            to="/"
            className="text-white text-xl font-manrope font-semibold ml-4"
          >
            {otherInfo.brand.label}
          </Link>
        </div>
        <div className="flex flex-col my-5 lg:my-0 lg:flex-row justify-center items-center lg:justify-between text-white">
          <p className="flex md:mx-5 xl:mx-10">
            <span className="inline-block pt-1 mr-3">
              {otherInfo.openingHours.icon}
            </span>
            {otherInfo.openingHours.label}
          </p>
          <a
            target="_blank"
            href={otherInfo.location.link}
            className="flex md:mr-5 xl:mr-10 hover:underline"
            rel="noreferrer"
          >
            <span className="inline-block pt-[3px] mr-3">
              {otherInfo.location.icon}
            </span>
            <span>{otherInfo.location.label}</span>
          </a>
          <a
            href={`mailto:${otherInfo.email}`}
            className="flex hover:underline md:mr-5 xl:mr-10"
          >
            <span className="inline-block pt-[2px] mr-3">
              {otherInfo.email.icon}
            </span>
            <span>{otherInfo.email.label}</span>
          </a>
        </div>
        <ul className="flex items-center pt-[10px]">
          {socialLinks.map((item: SocialLinks) => {
            return (
              <li
                key={item.link}
                className="flex items-center justify-center bg-white w-10 h-10 mx-1 rounded-full mr-3"
              >
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
