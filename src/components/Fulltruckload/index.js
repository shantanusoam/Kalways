import React, { useState } from "react";
import image1 from "../../images/dv0.jpg";
import image2 from "../../images/Ut1.jpg";
import image3 from "../../images/Rt2.jpg";
import grid1 from "../../images/fleet.png";
import grid2 from "../../images/grid2.png";
import grid3 from "../../images/grid3.png";
import grid4 from "../../images/grid4.png";
import Fade from "react-reveal/Fade";
// import bankground from "../../images";
import { animateScroll as scroll, Link } from "react-scroll";
import {
  HeroContainer,
  WWOCCButtonM,
  PCENTER,
  HeroP,
  HeroContent,
  WWOCCButton,
  HeroBg,
  HeroPromoContainer,
  HeroPromo,
  SocialMediaActions,
  HomeContactContent,
  Info,
  NavLinks,
  VideoBg,
  ContainerMain,
  Callinfo,
  BgImage,
} from "./fulltruckElememt";
const FullTruckLoad = () => {
  return (
    <>
      <HeroContainer id="Home">
        {/* <Gradients></Gradients>
        <HeroBg>
          <BgImage></BgImage>
        </HeroBg> */}
        <HeroContent className="flex flex-col 	justify-items-end w-1/2">
          <ContainerMain className="absolute bottom-0 left-20 pb-12 pl-28">
            <p className="text-white  font-medium pt-8 text-xl w-auto">
              CONSUMER PACKAGED GOODS LOGISTICS
            </p>
            <p className="text-white font-bold  font-medium pt-8 text-6xl w-5/6">
              Make it, Package it, and We'll Take it From There
            </p>
          </ContainerMain>

          <PCENTER class="text-gray-600 p-8">
            One-stop-shop for all your trucking needs. We are an authorized
            dealer for Vanguard trailers servicing in British Columbia, Canada.
            We are an established retailer of pre-owned trucks and trailers as
            well.
          </PCENTER>
        </HeroContent>
      </HeroContainer>
      <div className=" flex flex-col pb-10 bg-slate-800">
        {/* <div className="flex flex-row">
          <img src={image2} className="flex-1 h-96" alt=""></img>
          <img src={image3} className="flex-1 h-96" alt=""></img>
          <img src={image1} className="flex-1 h-96" alt=""></img>
        </div> */}

        <div className="flex flex-row pr-16 pt-16">
          <div className="self-end pl-32 pr-32">
            {/* <h3 className="font-bold pt-10 text-xl">Additional Information</h3> */}
            <h3 className="font-bold pt-10 text-3xl">
              Reliable Capacity and Support for Your CPG Freight
            </h3>
            <p className="font-medium pt-8 text-xl w-auto">
              Your products are going to fly off the shelf. But first, they have
              to get there on time. Whether you ship tissues or toothpaste,
              sunscreen or salty snacks, your supply chain is feeling the
              pressure. Consumer expectations are rising, delivery times are
              shortening and excuses won’t cut it.
            </p>
            <p className="font-medium pt-9 text-xl w-auto">
              We will help you get your products where they need to go fast,
              efficiently and without interruption. Join the more than 3,500 CPG
              companies who trust us with their freight.
            </p>
            <div className=" pt-10 grid gap-10 grid-cols-2 grid-cols-2">
              <div className="flex flex-col items-start">
                <img src={grid1} className=""></img>
                <h4 className="text-2xl">RELIABLE CAPACITY</h4>
                <p className="font-medium pt-2 text-xl w-auto">
                  We help move more than 700 CPG loads daily for producers of
                  all sizes. Whether you’re shipping to retailers or moving
                  product between your facilities, we’ve got you covered.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <img src={grid2} className=""></img>
                <h4 className="text-2xl">RELIABLE CAPACITY</h4>
                <p className="font-medium pt-2 text-xl w-auto">
                  We bring 15 years of industry experience across full
                  truckload, standard LTL, volume LTL and more. We’ve seen it
                  all, and we can help you through any challenge.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <img src={grid3} className=""></img>
                <h4 className="text-2xl">RELIABLE CAPACITY</h4>
                <p className="font-medium pt-2 text-xl w-auto">
                  Get reliable TL and LTL spot quotes instantly through our
                  CoyoteGO® digital freight platform. You can book and track
                  your freight with the click of a button, too.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <img src={grid4} className=""></img>
                <h4 className="text-2xl">RELIABLE CAPACITY</h4>
                <p className="font-medium pt-2 text-xl w-auto">
                  With our network of more than 75,000 carriers, you can move
                  freight wherever and however you need. We offer dry van,
                  refrigerated, power-only, and more for your freight needs.
                </p>
              </div>
            </div>
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
          <div className="flex-1 h-64 drop-shadow-lg z-10">
            <h3 className="font-bold pt-10 text-xl">Learn More</h3>
            <p className="font-medium pt-10 text-xl w-96 pb-8">
              We measure success by the results we generate for our clients.
              With every solution, kalway Logistics simplifies transportation
              management—so you can focus on what you do best.
            </p>
            <button class="btn">
              <span class="btn-text">- 1-800-295-9737 -</span>
            </button>
          </div>
        </div>
        <h2 className=" self-center font-bold pt-28 text-6xl">
          What Makes Us Different
        </h2>
      </div>

      <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex flex-row flex-wrap justify-center items-center space-y-5 ">
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
              src={image1}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold text-2xl mb-5">Pricing You Can Trust</h3>
              <br />
              <h3 className=" text-1xl mb-5 ">
                You can trust the quote you get from us, whether it comes
                through your rep or CoyoteGO. If you are quoting for a spot LTL
                load, a high-volume lane, or anything else, we can get you a
                clear, reliable price.
              </h3>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="bg-white hover:shadow-2xl m-9 flex-1">
            <img
              src={image2}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold text-2xl mb-5">Network Density</h3>
              <br />
              <h3 className=" text-1xl mb-5 ">
                You need quick access to a diverse carrier base to control your
                freight spend and enable consistent service. Leverage our vast,
                centralized network of over 75,000 carriers.
              </h3>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="bg-white hover:shadow-2xl m-9 flex-1">
            <img
              src={image3}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold text-2xl mb-5">Unmatched Support</h3>
              <br />
              <h3 className=" text-1xl mb-5 ">
                When moving CPG freight, you need the support of a dedicated
                team that you can count on. Our specialists are here to help
                during the day and after hours to respond to your quoting and
                issue resolution needs.
              </h3>
            </div>
          </div>
        </Fade>
      </div>
      <div className="flex flex-col bg-gray-200">
        <h2 className=" self-center font-bold pt-16 text-4xl">
          Reliable Solutions to Keep Your Products Stocked
        </h2>
        <h2 className=" self-center  pt-4 text-2xl">
          We can help buffer your supply chain against market volatility with a
          variety of dependable freight solutions.
        </h2>
        <div className=" pt-10 grid gap-10 grid-cols-4 grid-cols-2 self-center justify-center justify-items-center ">
          <div className="flex flex-col items-center bg-white w-80 p-8">
            <img src={grid1} className="w-32"></img>
            <h4 className="text-2xl  hover:text-lime-500">RELIABLE CAPACITY</h4>
          </div>
          <div className="flex flex-col items-center bg-white w-80 p-8">
            <img src={grid2} className=" w-32"></img>
            <h4 className="text-2xl">RELIABLE CAPACITY</h4>
          </div>
          <div className="flex flex-col items-center bg-white w-80 p-8">
            <img src={grid3} className="w-32"></img>
            <h4 className="text-2xl">RELIABLE CAPACITY</h4>
          </div>
          <div className="flex flex-col items-center bg-white w-80 p-8">
            <img src={grid4} className="w-32"></img>
            <h4 className="text-2xl">RELIABLE CAPACITY</h4>
          </div>
          <div className="flex flex-col items-center bg-white w-80 p-8">
            <img src={grid1} className="w-32"></img>
            <h4 className="text-2xl">RELIABLE CAPACITY</h4>
          </div>
          <div className="flex flex-col items-center bg-white w-80 p-8">
            <img src={grid2} className="w-32"></img>
            <h4 className="text-2xl">RELIABLE CAPACITY</h4>
          </div>
          <div className="flex flex-col items-center bg-white w-80 p-8">
            <img src={grid3} className="w-32"></img>
            <h4 className="text-2xl">RELIABLE CAPACITY</h4>
          </div>
          <div className="flex flex-col items-center bg-white w-80 p-8">
            <img src={grid4} className="w-32"></img>
            <h4 className="text-2xl">RELIABLE CAPACITY</h4>
          </div>
        </div>
        <div className="self-center pt-8 pb-10">
          <div className="flex flex-col items-center bg-white w-80 p-8">
            <img src={grid4} className="w-32"></img>
            <h4 className="text-2xl">RELIABLE CAPACITY</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullTruckLoad;
