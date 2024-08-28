import { Fragment, SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Menu, Cross } from "./icons";
import { otherInfo } from "../data/contact";
import { Routes, routes } from "../data/routes";

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
          <TransitionChild
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <DialogPanel className="fixed max-w-full inset-0 right-0 z-20 w-full bg-ds-black text-white">
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
                  {routes.map((item: Routes) => {
                    return (
                      <NavLink
                        key={item.path}
                        className="block uppercase text-[16px] leading-[19px] font-urbanist font-normal px-3 mb-4"
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    );
                  })}
                </div>
                <div className="flex flex-col text-white border-t lg:border-l-2 mt-7 border-[#f0f0f0b3] pl-4 py-4">
                  <a
                    href={`tel:00${otherInfo.phone.label}`}
                    className="flex text-white mr-0 mb-3"
                  >
                    <span className="inline-block pt-[2px]">
                      {otherInfo.phone.icon}
                    </span>
                    <span className="ml-3"> +{otherInfo.phone.label}</span>
                  </a>

                  <a
                    href={`mailto:${otherInfo.phone.label}`}
                    className="flex mb-3"
                  >
                    <span className="inline-block pt-[2px]">
                      {otherInfo.email.icon}
                    </span>
                    <span className="ml-3">{otherInfo.phone.label}</span>
                  </a>
                  <a
                    target="_blank"
                    href={otherInfo.location.link}
                    className="flex mr-12 mb-3"
                    rel="noreferrer"
                  >
                    <span className="inline-block pt-[3px]">
                      {otherInfo.location.icon}
                    </span>
                    <span className="ml-3">{otherInfo.location.label}</span>
                  </a>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};

export default NavbarMobile;
