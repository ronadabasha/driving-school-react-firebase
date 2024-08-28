import { ReactNode } from "react";
import { Avatar, Car, Work, Document, Id, Photo } from "../components/icons";

type OurValues = {
  number: string;
  label: string;
  icon: ReactNode;
};

type Documents = {
  label: string;
  icon: ReactNode;
};

export const ourValues: OurValues[] = [
  {
    number: "+15",
    label: "Years Experience",
    icon: <Work />,
  },
  {
    number: "10",
    label: "Instructors",
    icon: <Avatar />,
  },
  {
    number: "+2500",
    label: "Patents Issued",
    icon: <Document color="#ffffff" className="h-[40px]" />,
  },
  {
    number: "8",
    label: "Vehicles",
    icon: <Car />,
  },
];

export const documents: Documents[] = [
  {
    label: "Identification document",
    icon: <Id className="h-[80px] lg:h-[150px]" />,
  },
  {
    label: "4 photographs, measuring 4 x 5 cm",
    icon: <Photo className="h-[80px] lg:h-[150px]" />,
  },
  {
    label: "Medical certificate with photo",
    icon: <Document color="#000000" className="h-[80px] lg:h-[150px]" />,
  },
];
