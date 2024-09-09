import { Fragment } from "react";
import { createPortal } from "react-dom";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Cross } from "./icons";

type Props = {
  testCompleted: boolean;
  onClick: () => void;
  button?: React.ReactNode | string;
  panel?: React.ReactNode | string;
};

const Modal = ({ testCompleted, onClick, button, panel }: Props) => {
  return createPortal(
    <PopoverGroup>
      <Popover className="flex justify-center h-full mx-6 sm:mx-0">
        {({ open, close }) => (
          <>
            <PopoverButton
              className={`absolute top-16 lg:top-44 right-3 lg:right-20 text-sm sm:text-lg font-urbanist font-semibold text-center text-white bg-ds-red w-[180px] sm:w-[325px] color-white py-2 px-6 sm:ml-6 mb-5 ${
                testCompleted ? "opacity-30" : "opacity-1 hover:opacity-75 "
              }`}
              onClick={onClick}
              disabled={testCompleted}
            >
              {button}
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel
                static
                className="bg-[#000000a3] fixed w-full h-screen top-0"
              >
                <div className="absolute -mt-28 top-1/2 left-[10%] lg:left-[30%] z-10 w-4/5 lg:w-2/5 p-5 overflow-hidden shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)] rounded-b-[5px] bg-white">
                  <button onClick={close}>
                    <Cross className="absolute right-5 top-7 z-10" />
                  </button>
                  {panel}
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </PopoverGroup>,
    document.body
  );
};

export default Modal;
