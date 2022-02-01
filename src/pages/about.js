import React, { useState, useEffect } from 'react';
import trucks from '../images/sustain1.jpg';
import Containers from '../images/sustain2.jpg';
import Shiping from '../images/sustain3.jpg';
import Navbar from '../components/Navbar';

import Sidebar from '../components/Sidebar';

import FooterSection from '../components/FooterSection';
import AboutMain from '../components/AboutMain';
import QuoteAtEnd from '../components/QuoteAtEnd';
import AboutMain2 from '../components/AboutMain2';
import Fade from 'react-reveal/Fade';
const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disabel, setdisabel] = useState(
    () => window.localStorage.getItem('product') ?? false
  );

  useEffect(() => {
    // Update the document title using the browser API
    disabeled() ? setdisabel(true) : setdisabel(false);
    window.localStorage.setItem('product', disabel);
  });

  function disabeled() {
    const path = window.location.pathname;
    console.log(path === '/');
    if (path === '/') {
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
      <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex flex-row flex-wrap justify-center items-center   ">
        {/* <LinkRo
              key={4}
              to={{
                pathname: "/Product",
                state: { id: "lol" }, // your data array of objects
              }}
              className=" flex-1 "
              key={3}
              id={3}
            > */}
        {/* <Fade bottom key={2}>
              <div
                className="bg-white   m-9 hover:shadow-2xl flex-1 "
                key={2}
                id={5}
              >
                <img
                  src={trucks}
                  alt="Trailers images"
                  className=" h-80 w-full object-cover"
                />

                <div className="p-8"> */}
        {/* <h3 className="font-bold text-2xl mb-5">fine</h3> */}
        {/* <br />
                  <h3 className=" text-1xl mb-5 ">
                    Tap into a marketplace that matches over 10.000 shipments a
                    day
                  </h3>
                  <NavLink
                    key={1}
                    to={{
                      pathname: "/Product",
                      state: { id: "lol" }, // your data array of objects
                    }}
                  > */}
        {/* <p>date</p> */}
        {/* </NavLink>
                </div>
              </div>
            </Fade> */}
        {/* </LinkRo> */}
        <Fade bottom>
          <div className="bg-white hover:shadow-2xl m-9 flex-1">
            <img
              src={trucks}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold text-2xl mb-5">For KALWAY</h3>
              <br />
              <h3 className=" text-1xl mb-5  h-56 lg:h-48">
                Every KALWAY employee has a part to play in driving a more
                sustainable industry. From in-office recycling programs and
                digital efficiency efforts, to volunteer opportunities with
                organizations like Chicago Gateway Green, it’s what we do
                together that sets us apart
              </h3>
              <button class="btn">
                <span class="btn-text">Our values</span>
              </button>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="bg-white hover:shadow-2xl m-9 flex-1">
            <img
              src={Containers}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold text-2xl mb-5 ">For Shippers</h3>
              <br />
              <h3 className=" text-1xl mb-5 h-56 lg:h-48">
                Improving your sustainability performance starts with adjusting
                your approach. KALWAY can help you customize solutions that
                include eliminating empty miles, intermodal conversion, order
                consolidation, RFP management, asset & route optimization,
                co-loading freight and network rationalization.
              </h3>
              <button class="btn">
                <span class="btn-text">Talk to a specialist</span>
              </button>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="bg-white hover:shadow-2xl m-9 flex-1">
            <img
              src={Shiping}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold text-2xl mb-5">For Carriers</h3>
              <br />
              <h3 className=" text-1xl mb-5  h-56 lg:h-48">
                Whether you’re a carrier who is already leveraging fuel
                alternatives, like biodiesel, or looking to run dedicated routes
                for sustainability-minded shippers, we’re here to help. We can
                connect you with the right freight, dynamic routes and automatic
                reloads to keep your trucks full.
              </h3>
              <button class="btn">
                <span class="btn-text">Become a sustainable carrier </span>
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default About;
