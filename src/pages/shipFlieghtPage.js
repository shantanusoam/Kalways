import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Shipfreight } from "../components/waystoship/shipfreight";

export default class ShipFlightPage extends React.Component {
  componentDidMount() {
    document.title = "Kalway shipfreight";
  }

  render() {
    console.log(this.props.location.state.id);
    return (
      <>
        <Shipfreight></Shipfreight>
      </>
    );
  }
}
