import { ReactNode } from "react";
import {
  Facebook,
  Instagram,
  Location,
  Email,
  Clock,
  Phone,
} from "../components/icons";

export type SocialLinks = {
  link: string;
  icon: ReactNode;
};

type OtherInfo = {
  [key: string]: { label: string; icon?: ReactNode; link?: string };
};

export const socialLinks: SocialLinks[] = [
  {
    link: "https://facebook.com/",
    icon: <Facebook />,
  },
  {
    link: "https://instagram.com/",
    icon: <Instagram />,
  },
];

export const otherInfo: OtherInfo = {
  brand: { label: "Driving School Name" },
  openingHours: { label: "Mon to Sat: 8.00 am - 7.00 pm", icon: <Clock /> },
  location: {
    label: "Tirana, Albania",
    icon: <Location />,
    link: "http://maps.apple.com/maps?q=41.326861076222436, 19.822800721202288",
  },
  email: { label: "test@company.com", icon: <Email /> },
  phone: { label: "355122343456", icon: <Phone /> },
};
