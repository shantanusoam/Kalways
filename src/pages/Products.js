import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import ContactSection from "../components/ContactSection";

import ProductBottom from "../components/ProductBottom";
import ProductTop from "../components/ProductTop";
import Contact from "./contact";

export default class Products extends React.Component {
  componentDidMount() {
    document.title = "kalway Product";
  }

  render() {
    console.log(this.props.location.state.id);
    return (
      <>
        <ProductTop id={this.props.location.state.id}></ProductTop>
        <ContactSection></ContactSection>
      </>
    );
  }
}
