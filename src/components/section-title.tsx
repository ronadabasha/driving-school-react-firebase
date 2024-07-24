import { ReactNode } from "react";
import { ChevronLeftDouble, ChevronRightDouble } from "./icons";

type Props = {
  firstLabel: string;
  secondLabel: string;
};

function SectionTitle({ firstLabel, secondLabel }: Props) {
  return (
    <>
      <p className="flex text-ds-grey text-sm lg:text-base font-normal">
        <ChevronLeftDouble />
        <span className="pt-1 lg:pt-0 px-3">{firstLabel}</span>
        <ChevronRightDouble />
      </p>
      <h2 className="pb-5 max-w-[500px] text-2xl lg:text-4xl font-extrabold">
        {secondLabel}
      </h2>
    </>
  );
}

export default SectionTitle;