import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { shipfreight } from '../components/waystoship/shipfreight';
import './shipFleight.css';
import image1 from '../images/dv0.jpg';
import image2 from '../images/Ut1.jpg';
import image3 from '../images/Rt2.jpg';
import { Card } from '../components/shipfreight/shipfreight';
export default class Shipper extends React.Component {
  componentDidMount() {
    document.title = 'KALWAY shipfreight';
  }

  render() {
    return (
      <div className="lg:pt-36 flex flex-col pb-10 bg-slate-800">
        <div className="flex lg:flex-row flex-col">
          <img src={image2} className="flex-1 h-96" alt=""></img>
          <img src={image3} className="flex-1 h-96" alt=""></img>
          <img src={image1} className="flex-1 h-96" alt=""></img>
        </div>
        <Card>
          <h2 className=" self-left lg:pt-10 lg:pl-32 text-3xl p-8">
            FREIGHT BROKERAGE OVERVIEW
            <p className="h-4"></p>
            <div className="w-40 h-2  hover:w-10"></div>
          </h2>
        </Card>

        <div className="flex lg:flex-row lg:pr-16 lg:pt-16 flex-col p-8">
          <div className="self-end lg:pl-32 lg:pr-32">
            <h3 className="font-bold pt-10 text-3xl">Additional Information</h3>
            <h3 className="font-bold pt-10 text-xl">
              Your New, Upgraded LTL Solution
            </h3>
            <p className="font-medium pt-2 text-xl w-auto">
              Put our purchasing intelligence to work. kalway Logistics has
              negotiated pricing with over 120 of North America’s top LTL
              carriers. Enjoy extra savings with our extensive capacity and
              access to lower rates. Choose kalway Logistics for complete supply
              chain visibility. Save time as our experts do the transportation
              legwork, including carrier sourcing, step-by-step shipment
              tracking, and auditing and billing
            </p>
            <h3 className="font-bold pt-10 text-xl">
              Cost-Effective Truckload Solutions
            </h3>
            <p className="font-medium pt-2 text-xl w-auto">
              kalway Logistics moves thousands of loads a day via our network of
              over 50,000 truckload carriers. Regardless of season or spikes, we
              have capacity for your shipments. Save time as our full-truckload
              experts handle load tender, track and trace, data management,
              order processing, invoice auditing, and bill payment. kalway
              Logistics technology gives you complete visibility into each
              shipment, from step-by-step tracking to custom reporting.
            </p>
            {/* <h3 className="font-bold pt-10 text-xl">REAL-TIME TRACKING</h3>
            <p className="font-medium pt-2 text-xl">
              The kalway Logistics mobile app allows drivers to provide
              real-time tracking, reducing the need for check-in phone calls.{" "}
            </p>
            <h3 className="font-bold pt-10 text-xl">DOCUMENT UPLOAD</h3>
            <p className="font-medium pt-2 text-xl">
              TWith the kalway Logistics mobile app, drivers can quickly and
              easily submit delivery documents to ensure they get paid faster.
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
                to your needs{" "}
              </li>
              <li className="font-medium pt-2 text-xl">
                Receive Reload opportunities for shipments booked with Echo
              </li>
            </div> */}
          </div>
          <div className="flex-1 h-64">
            <h3 className="font-bold pt-10 text-xl">Learn More</h3>
            <p className="font-medium pt-10 text-xl w-96 pb-8">
              We measure success by the results we generate for our clients.
              With every solution, kalway Logistics simplifies transportation
              management—so you can focus on what you do best.
            </p>
            <button class="btn">
              <span class="btn-text">- 1-800-502-7000 -</span>
            </button>
          </div>
        </div>
        <h2 className=" self-center pt-20 text-4xl">CROSS - BORDER</h2>
        <div className="flex flex-row lg:pr-16 p-8">
          <div className="self-end lg:pl-32 lg:pr-16 pb-16">
            <h3 className="font-bold pt-10 text-xl">
              kalway Logistics has Combined 30 years’ experience moving
              time-critical freight across borders in the United States, Mexico
              and Canada.
            </h3>
            <p className="font-medium pt-1 text-xl ">
              Our cross-border network operates with a high sense of immediacy,
              managed by our freight forwarding experts and drawing on our
              longstanding relationships with customs brokers. We accept all
              kinds of cargo: raw materials, parts, finished goods and special
              handling. Our border partnership site offers cross-docking,
              transloading and warehousing capabilities, with a capacity of up
              to 35,000 square feet. kalway has similar border services at all
              other major crossing points of United states.
            </p>

            {/* <h3 className="font-bold pt-10 text-xl">REAL-TIME TRACKING</h3>
            <p className="font-medium pt-2 text-xl">
              The kalway Logistics mobile app allows drivers to provide
              real-time tracking, reducing the need for check-in phone calls.{" "}
            </p>
            <h3 className="font-bold pt-10 text-xl">DOCUMENT UPLOAD</h3>
            <p className="font-medium pt-2 text-xl">
              TWith the kalway Logistics mobile app, drivers can quickly and
              easily submit delivery documents to ensure they get paid faster.
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
                to your needs{" "}
              </li>
              <li className="font-medium pt-2 text-xl">
                Receive Reload opportunities for shipments booked with Echo
              </li>
            </div> */}
          </div>
          <img
            src={image1}
            className="flex-1 h-64 hidden lg:block"
            alt=""
          ></img>
        </div>
      </div>
    );
  }
}
