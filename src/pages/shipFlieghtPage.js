import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { shipfreight } from '../components/waystoship/shipfreight';
import Styled from 'styled-components';
import './shipFleight.css';
import image1 from '../images/dv0.jpg';
import image2 from '../images/Ut1.jpg';
import image3 from '../images/Rt2.jpg';
const Card = Styled.div`
h3 {
  div {
    background: #00e700;
    width: 10%;
    transition: all 0.5s ease;
  }
  :hover {
    cursor: pointer;
    div {
      width: 100%;
    }
  }
}
`;
export default class ShipFlightPage extends React.Component {
  componentDidMount() {
    document.title = 'Kalway shipfreight';
  }

  render() {
    return (
      <div className="pt-36 flex flex-col pb-10 bg-slate-500">
        <div className="flex flex-row">
          <img src={image1} className="flex-1 h-96" alt=""></img>
          <img src={image2} className="flex-1 h-96" alt=""></img>
          <img src={image3} className="flex-1 h-96" alt=""></img>
        </div>
        <Card className=" self-center pt-10 pr-48">
          <h3 className=" self-center pt-10  text-4xl">
            CARRIER SERVICES
            <p className="h-4"></p>
            <div className="w-40 h-2  hover:w-10"></div>
          </h3>
        </Card>

        <div className="flex flex-row pl-16 pt-16">
          <img src={image1} className="flex-1 h-64" alt=""></img>
          <div className="self-end pl-32">
            <h3 className="font-bold pt-10 text-xl">CARRIER PARTNERSHIP</h3>
            <h3 className="font-bold pt-10 text-xl">AVAILABLE LOADS ACCESS</h3>
            <p className="font-medium pt-2 text-xl ">
              The kalway Logistics web portal and mobile app gives carriers
              real-time access to search, view, and bid on available loads.
            </p>
            <h3 className="font-bold pt-10 text-xl">
              LOAD LIFECYCLE MANAGEMENT
            </h3>
            <p className="font-medium pt-2 text-xl w-1/2">
              kalway Logistics gives dispatchers the ability to manage loads and
              drivers with one easy-to-use portal, putting all the information
              you need, including load documents and invoices, at your
              fingertips.
            </p>
            <h3 className="font-bold pt-10 text-xl">REAL-TIME TRACKING</h3>
            <p className="font-medium pt-2 text-xl">
              The kalway Logistics mobile app allows drivers to provide
              real-time tracking, reducing the need for check-in phone calls.{' '}
            </p>

            <h3 className="font-bold pt-10 text-xl">
              Dispatcher Web Portal Benefits:
            </h3>
            <div className="self-center pt-10 ">
              <li className="font-medium pt-2 text-xl">
                Search Available Loads and submit bids
              </li>
              <li className="font-medium pt-2 text-xl">
                Full fleet overview with ability to manage loads and drivers
              </li>
              <li className="font-medium pt-2 text-xl">
                Visibility into your Echo shipment volume history
              </li>
              <li className="font-medium pt-2 text-xl">
                Complete load visibility during shipment process
              </li>
              <li className="font-medium pt-2 text-xl">
                Invoice portal to view current and past receivables
              </li>
              <li className="font-medium pt-2 text-xl">
                Ability to share load info with one click
              </li>
              <li className="font-medium pt-2 text-xl">
                Set Preferred Lanes and receive daily Suggested Loads tailored
                to your needs{' '}
              </li>
              <li className="font-medium pt-2 text-xl">
                Receive Reload opportunities for shipments booked with Echo
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
