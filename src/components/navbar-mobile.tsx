import { Dialog, Transition } from "@headlessui/react";
import { Fragment, SyntheticEvent, useState } from "react";
import { Menu, Cross, Phone, Email, Location } from "./icons";
import { Link } from "react-router-dom";
import {
  ABOUT,
  COMMON_QUESTIONS,
  CONTACT,
  COURSES,
  HOME,
  TESTS_CATEGORIES,
} from "../routes";

const NavbarMobile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex lg:hidden flex-1 justify-start text-white">
        <button
          type="button"
          className="bg-ds-red p-[10px] absolute top-0 right-0"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Menu />
        </button>
      </div>
      <Transition show={mobileMenuOpen} as={Fragment} appear>
        <Dialog
          as="div"
          static
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <Dialog.Panel className="fixed max-w-full inset-0 right-0 z-20 w-full bg-ds-black text-white">
              <div className="flex items-center justify-start p-[19px] h-[75px] w-full">
                <button
                  type="button"
                  className="h-[37px] w-[37px] text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <Cross />
                </button>
              </div>
              <div
                className="px-5 py-4 flex flex-col"
                onClick={({ target }: SyntheticEvent) => {
                  if ((target as HTMLElement)?.classList.contains("nav-link")) {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                <div className="flex flex-col items-start text-white">
                  <Link
                    className="block uppercase text-[16px] leading-[19px] font-urbanist font-normal px-3 mb-4"
                    to={HOME}
                  >
                    Home
                  </Link>
                  <Link
                    className="block uppercase text-[16px] leading-[19px] font-urbanist font-normal px-3 mb-4"
                    to={ABOUT}
                  >
                    About
                  </Link>
                  <Link
                    className="block uppercase text-[16px] leading-[19px] font-urbanist font-normal px-3 mb-4"
                    to={COURSES}
                  >
                    Courses
                  </Link>
                  <Link
                    className="block uppercase text-[16px] leading-[19px] font-urbanist font-normal px-3 mb-4"
                    to={TESTS_CATEGORIES}
                  >
                    Tests
                  </Link>
                  <Link
                    className="block uppercase text-[16px] leading-[19px] font-urbanist font-normal px-3 mb-4"
                    to={COMMON_QUESTIONS}
                  >
                    Common Questions
                  </Link>
                  <Link
                    className="block uppercase text-[16px] leading-[19px] font-urbanist font-normal px-3 mb-4"
                    to={CONTACT}
                  >
                    Contact
                  </Link>
                </div>
                <div className="flex flex-col text-white border-t lg:border-l-2 mt-7 border-[#f0f0f0b3] pl-4 py-4">
                  <a
                    href="tel:00355122343456"
                    className="flex text-white mr-0 mb-3"
                  >
                    <span className="inline-block pt-[2px]">
                      <Phone />
                    </span>{" "}
                    <span className="ml-3"> +355122343456</span>
                  </a>

                  <a href="mailto:test@company.com" className="flex mb-3">
                    <span className="inline-block pt-[2px]">
                      <Email />
                    </span>{" "}
                    <span className="ml-3">test@company.com</span>
                  </a>
                  <a
                    target="_blank"
                    href="http://maps.apple.com/maps?q=41.326861076222436, 19.822800721202288"
                    className="flex mr-12 mb-3"
                    rel="noreferrer"
                  >
                    <span className="inline-block pt-[3px]">
                      <Location />
                    </span>{" "}
                    <span className="ml-3">Tirana, Albania</span>
                  </a>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default NavbarMobile;
