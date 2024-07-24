import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/banner";

const breadcrumbs = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];

function Contact() {
  return (
    <>
      <Banner breadcrumbs={breadcrumbs} />
      <div></div>
    </>
  );
}

export default Contact;
