import React from "react";
import Banner from "../components/banner";
import { contactBreadcrumbs } from "../data/breacrumbs";

function Contact() {
  return (
    <>
      <Banner breadcrumbs={contactBreadcrumbs} />
      <div></div>
    </>
  );
}

export default Contact;
