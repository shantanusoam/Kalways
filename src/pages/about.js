import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

import FooterSection from "../components/FooterSection";
import AboutMain from "../components/AboutMain";
import QuoteAtEnd from "../components/QuoteAtEnd";
import AboutMain2 from "../components/AboutMain2";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disabel, setdisabel] = useState(
    () => window.localStorage.getItem("product") ?? false
  );
  useEffect(() => {
    // Update the document title using the browser API
    disabeled() ? setdisabel(true) : setdisabel(false);
    window.localStorage.setItem("product", disabel);
  });

  function disabeled() {
    const path = window.location.pathname;
    console.log(path === "/");
    if (path === "/") {
      return true;
    }
    return false;
  }
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <AboutMain></AboutMain>
    </>
  );
};

export default About;
