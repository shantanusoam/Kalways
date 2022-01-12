import React, { useState, useEffect } from "react";
import TrailerList from "../components/TrailersList";

export const ProductsPage = () => {
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
    <div style={{ paddingTop: "70px" }}>
      <TrailerList></TrailerList>
    </div>
  );
};
