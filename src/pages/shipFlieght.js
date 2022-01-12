import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";

export default class Products extends React.Component {
  componentDidMount() {
    document.title = "Kalway shipfreight";
  }

  render() {
    console.log(this.props.location.state.id);
    return <></>;
  }
}
