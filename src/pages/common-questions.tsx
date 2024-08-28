import React, { MutableRefObject, useRef } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Minus, Plus } from "../components/icons";
import Banner from "../components/banner";
import { useCommonQuestions } from "../hooks/use-common-questions";
import { questionsBreadcrumbs } from "../data/breacrumbs";

function CommonQuestions() {
  const commonQuestions = useCommonQuestions();
  type DisclosureRef = (
    focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>
  ) => void;

  const refs = useRef<Array<DisclosureRef>>([]);

  const handleDisclosureChange = (index: number) => {
    refs.current.forEach((closeFunction: DisclosureRef, refIndex: number) => {
      if (refIndex !== index) {
        closeFunction();
      }
    });
  };

  return (
    <>
      <Banner breadcrumbs={questionsBreadcrumbs} />
      <div className="max-w-screen-xl py-12 md:py-20 mx-auto">
        {commonQuestions?.map((item, index) => (
          <div className="mx-[19px] font-mori desktop:mx-[131px]" key={item.id}>
            <Disclosure
              as="div"
              className={`${
                index < commonQuestions.length - 1
                  ? "border-b-2 border-ds-grey-light"
                  : ""
              }`}
            >
              {({ open, close }) => (
                <>
                  <DisclosureButton
                    as="div"
                    ref={() => {
                      refs.current[index] = close;
                    }}
                    onClick={() => handleDisclosureChange(index)}
                    className="h5-mori flex flex-row py-4 md:py-[26px] cursor-pointer hover:text-fao-innovation"
                  >
                    <div className="flex flex-1 font-urbanist text-sm md:text-xl font-bold">
                      {item.description}
                    </div>
                    <div className="flex items-center pl-2">
                      {open ? <Minus /> : <Plus />}
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel className="decoration-primary pb-[26px] desktop:max-w-[927px]">
                    <div className="max-w-[calc(100%-55px)] text-sm md:text-base">
                      {item.answer}
                    </div>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommonQuestions;
