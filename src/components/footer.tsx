import { Link } from "react-router-dom";
import Logo from "./logo";
import { Facebook, Instagram, Location, Email, Clock } from "./icons";

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
            Driving School Name{" "}
          </Link>
        </div>
        <div className="flex flex-col my-5 lg:my-0 lg:flex-row justify-center items-center lg:justify-between text-white">
          <p className="flex md:mx-5 xl:mx-10">
            <span className="inline-block pt-1 mr-3">
              <Clock />
            </span>{" "}
            Mon to Sat: 8.00 am - 7.00 pm
          </p>
          <a
            target="_blank"
            href="http://maps.apple.com/maps?q=41.326861076222436, 19.822800721202288"
            className="flex md:mr-5 xl:mr-10 hover:underline"
            rel="noreferrer"
          >
            <span className="inline-block pt-[3px] mr-3">
              <Location />
            </span>{" "}
            <span>Tirana, Albania</span>
          </a>
          <a
            href="mailto:test@company.com"
            className="flex hover:underline md:mr-5 xl:mr-10"
          >
            <span className="inline-block pt-[2px] mr-3">
              <Email />
            </span>{" "}
            <span>test@company.com</span>
          </a>
        </div>
        <ul className="flex items-center pt-[10px]">
          <li className="flex items-center justify-center bg-white w-10 h-10 mx-1 rounded-full mr-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
          </li>
          <li className="flex items-center justify-center bg-white w-10 h-10 mx-1 rounded-full">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
