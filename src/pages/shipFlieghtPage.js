import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Shipfreight } from "../components/waystoship/shipfreight";
import "./shipFleight.css";
import image1 from "../images/dv0.jpg";
import image2 from "../images/Ut1.jpg";
import image3 from "../images/Rt2.jpg";
export default class ShipFlightPage extends React.Component {
  componentDidMount() {
    document.title = "Kalway shipfreight";
  }

  render() {
    return (
      <div className="pt-36 flex flex-col center">
        <div className="flex flex-row">
          <img src={image1} className="flex-1 h-96" alt=""></img>
          <img src={image2} className="flex-1 h-96" alt=""></img>
          <img src={image3} className="flex-1 h-96" alt=""></img>
        </div>
        <h2 className="align-middle">CARRIER SERVICES</h2>
        <h3>CARRIER PARTNERSHIP</h3>
        <h3>AVAILABLE LOADS ACCESS</h3>
        <p>
          The AXL Logistics web portal and mobile app gives carriers real-time
          access to search, view, and bid on available loads.
        </p>
        <h3>LOAD LIFECYCLE MANAGEMENT</h3>
        <p>
          AXL Logistics gives dispatchers the ability to manage loads and
          drivers with one easy-to-use portal, putting all the information you
          need, including load documents and invoices, at your fingertips.
        </p>
        <h3>REAL-TIME TRACKING</h3>
        <p>
          The AXL Logistics mobile app allows drivers to provide real-time
          tracking, reducing the need for check-in phone calls.{" "}
        </p>
        <h3>DOCUMENT UPLOAD</h3>
        <p>
          TWith the AXL Logistics mobile app, drivers can quickly and easily
          submit delivery documents to ensure they get paid faster.
        </p>
        <h3>Dispatcher Web Portal Benefits:</h3>
        <div>
          <li>Search Available Loads and submit bids</li>
          <li>Full fleet overview with ability to manage loads and drivers</li>
          <li>Visibility into your Echo shipment volume history</li>
          <li>Complete load visibility during shipment process</li>
          <li>Invoice portal to view current and past receivables</li>
          <li>Ability to share load info with one click</li>
          <li>
            Set Preferred Lanes and receive daily Suggested Loads tailored to
            your needs{" "}
          </li>
          <li>Receive Reload opportunities for shipments booked with Echo</li>
        </div>
      </div>
    );
  }
}
