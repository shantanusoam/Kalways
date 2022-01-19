import React, { useState } from 'react';
import { TiArrowRightThick } from 'react-icons/ti';
import image1 from '../../images/dv0.jpg';
import image2 from '../../images/Ut1.jpg';
import image3 from '../../images/Rt2.jpg';
import grid1 from '../../images/fleet.png';
import grid2 from '../../images/grid2.png';
import grid3 from '../../images/grid3.png';
import grid4 from '../../images/grid3.png';

import Fade from 'react-reveal/Fade';
// import bankground from "../../images";
import { animateScroll as scroll, Link } from 'react-scroll';
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
} from './Industries';
const Industries = () => {
  return (
    <>
      <HeroContainer id="Home">
        {/* <Gradients></Gradients>
        <HeroBg>
          <BgImage></BgImage>
        </HeroBg> */}
        <HeroContent>
          <ContainerMain>
            <h3 className=" pt-10 text-3xl text-white">CROSS-BORDER FREIGHT</h3>
            <p className="font-medium font-bold pt-8 text-white text-4xl w-auto">
              Driving your business across borders.
            </p>
            <p className="font-medium pt-8 text-xl w-auto text-white">
              Bring simplicity to an intricate supply chain process with our
              reliable cross-border solutions.
            </p>
          </ContainerMain>

          {/* <PCENTER class="text-gray-600 p-8">
            One-stop-shop for all your trucking needs. We are an authorized
            dealer for Vanguard trailers servicing in British Columbia, Canada.
            We are an established retailer of pre-owned trucks and trailers as
            well.
          </PCENTER> */}
        </HeroContent>
      </HeroContainer>
      <div className=" flex flex-col pb-10 bg-slate-800">
        <h2 className=" self-center font-bold pt-16 text-4xl">
          Expand your supply chain. Ship without borders.
        </h2>
        <h2 className=" self-center  pt-4 text-2xl">
          Whether shipping northbound or southbound, Coyote leverages a dense
          North American carrier network to bring you capacity when and where
          you need it. We source the right carrier for each opportunity,
          facilitate the crossing logistics and monitor your freight throughout
          the process.
        </h2>

        {/* <div className="flex flex-row">
          <img src={image2} className="flex-1 h-96" alt=""></img>
          <img src={image3} className="flex-1 h-96" alt=""></img>
          <img src={image1} className="flex-1 h-96" alt=""></img>
        </div> */}

        {/* <div className="flex flex-row pr-16 pt-16"> */}

        {/* <div className="flex-1 h-64 drop-shadow-lg z-10">
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
        </h2> */}
      </div>
      <div className="flex flex-row pr-16 pt-16">
        <div className="self-end pl-32 pr-32">
          {/* <h3 className="font-bold pt-10 text-xl">Additional Information</h3> */}
          <h3 className="font-bold pt-10 text-3xl">Ways to Ship</h3>
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
              <h4 className="text-2xl">AUTOMOTIVE LOGISTICS</h4>
              <p className="font-medium pt-2 text-xl w-auto">
                Automotive shippers can’t afford to have their supply chain slam
                on the brakes. Keeping up with changes in demand and fulfilling
                orders can be daunting. You need a 3PL you can trust with a
                reliable, responsive carrier network to make sure you never hit
                a roadblock.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img src={grid2} className=""></img>
              <h4 className="text-2xl">CONSUMER PACKAGED GOODS LOGISTICS</h4>
              <p className="font-medium pt-2 text-xl w-auto">
                our products are going to fly off the shelf. But first, they
                have to get there on time. Whether you ship tissues or
                toothpaste, sunscreen or salty snacks, your supply chain is
                feeling the pressure. Consumer expectations are rising, delivery
                times are shortening and excuses won’t cut it.
                <br />
                We will help you get your products where they need to go fast,
                efficiently and without interruption. Join the more than 3,500
                CPG companies who trust us with their freight
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img src={grid3} className=""></img>
              <h4 className="text-2xl">FOOD & BEVERAGE LOGISTICS</h4>
              <p className="font-medium pt-2 text-xl w-auto">
                Running a food and beverage supply chain is not easy — margins
                are tight, deliveries are strict, and customer demand is
                seasonal.
                <br />
                You grow, crate, can and bottle the essential products we all
                rely on. Your supply chain needs experienced refrigerated
                carriers and national providers you can rely on.
                <br />
                Whether you’re shipping three pallets of craft beer, 30
                truckloads of leafy greens or 3,000 annual loads of ice cream,
                you can trust Coyote’s 15-years of food and beverage experience
                to cover sensitive freight on-time, in-full.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img src={grid4} className=""></img>
              <h4 className="text-2xl">HEALTHCARE LOGISTICS</h4>
              <p className="font-medium pt-2 text-xl w-auto">
                Healthcare shippers need fast and reliable service to keep up
                with changes in demand. From medical equipment and
                pharmaceuticals to PPE and emergency supplies — deliveries must
                arrive on-time and intact.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img src={grid4} className=""></img>
              <h4 className="text-2xl">Air & Ocean</h4>
              <p className="font-medium pt-2 text-xl w-auto">
                Running a manufacturing supply chain is not easy. Though
                transportation is often viewed as a commodity, the cost of
                missed deliveries can shut down production. Manufacturers have
                to control freight spend while delivering high service.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img src={grid4} className=""></img>
              <h4 className="text-2xl">MANUFACTURING LOGISTICS</h4>
              <p className="font-medium pt-2 text-xl w-auto">
                Running a manufacturing supply chain is not easy. Though
                transportation is often viewed as a commodity, the cost of
                missed deliveries can shut down production. Manufacturers have
                to control freight spend while delivering high service.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img src={grid4} className=""></img>
              <h4 className="text-2xl">RETAIL LOGISTICS</h4>
              <p className="font-medium pt-2 text-xl w-auto">
                It’s never been harder to manage a retail supply chain. The line
                between brick-and-mortar and e-commerce is blurring. Everyday,
                consumer expectations rise higher, while delivery times get
                shorter. To execute a modern retail supply chain, you need agile
                capacity and readily-available assets — not only for the last
                mile, but for every mile along the way.
              </p>
            </div>
          </div>
        </div>
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
          Mexico Cross-Border Services
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
        <h2 className=" self-center font-bold pt-28 text-4xl">
          Canada Cross-Border Services
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
      <div className="flex flex-col">
        <h2 className=" self-center font-bold pt-28 text-4xl">
          ONE CENTRALIZED MARKETPLACE. MULTIPLE MODES FOR WHAT YOU NEED.
        </h2>
        <div className=" pt-10 grid gap-2 grid-cols-4 self-center justify-center justify-items-center h-max">
          <Fade right>
            <div className="bg-white flex flex-col  m-9 flex-1 mb-40">
              <img
                src={image3}
                alt="boy with camera"
                className=" h-80 w-full object-cover static z-0"
              />

              <div className="p-8 bg-white  self-center m-0 w-64 shadow-md absolute bottom-0 left-50% z-10">
                <h3 className="font-bold text-2xl mb-5 flex flex-row justify-center ">
                  Unmatched Support{' '}
                  <TiArrowRightThick className="self-center w-8" />
                </h3>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="bg-white flex flex-col  m-9 flex-1">
              <img
                src={image3}
                alt="boy with camera"
                className=" h-80 w-full object-cover static z-0"
              />

              <div className="p-8 bg-white  self-center m-0 w-64 shadow-md absolute bottom-10 left-50% z-10">
                <h3 className="font-bold text-2xl mb-5 flex flex-row justify-center ">
                  Unmatched Support{' '}
                  <TiArrowRightThick className="self-center w-8" />
                </h3>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="bg-white flex flex-col  m-9 flex-1">
              <img
                src={image3}
                alt="boy with camera"
                className=" h-80 w-full object-cover static z-0"
              />

              <div className="p-8 bg-white  self-center m-0 w-64 shadow-md absolute bottom-10 left-50% z-10">
                <h3 className="font-bold text-2xl mb-5 flex flex-row justify-center ">
                  Unmatched Support{' '}
                  <TiArrowRightThick className="self-center w-8" />
                </h3>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="bg-white flex flex-col  m-9 flex-1">
              <img
                src={image3}
                alt="boy with camera"
                className=" h-80 w-full object-cover static z-0"
              />

              <div className="p-8 bg-white  self-center m-0 w-64 shadow-md absolute bottom-10 left-50% z-10">
                <h3 className="font-bold text-2xl mb-5 flex flex-row justify-center ">
                  Unmatched Support{' '}
                  <TiArrowRightThick className="self-center w-8" />
                </h3>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className=" self-center  pt-28 text-2xl">
          ONE CENTRALIZED MARKETPLACE. MULTIPLE MODES FOR WHAT YOU NEED.
        </h2>
        <h2 className=" self-center font-bold pt-8 text-4xl">
          Insights to help grow your business.
        </h2>
        <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex flex-row flex-wrap justify-center items-center space-y-5 ">
          <Fade bottom>
            <div className="bg-white hover:shadow-2xl m-9 flex-1">
              <img
                src={image1}
                alt="boy with camera"
                className=" h-80 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="font-bold text-2xl mb-5">
                  Pricing You Can Trust
                </h3>
                <br />
                <h3 className=" text-1xl mb-5 ">
                  You can trust the quote you get from us, whether it comes
                  through your rep or CoyoteGO. If you are quoting for a spot
                  LTL load, a high-volume lane, or anything else, we can get you
                  a clear, reliable price.
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
                  You need quick access to a diverse carrier base to control
                  your freight spend and enable consistent service. Leverage our
                  vast, centralized network of over 75,000 carriers.
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
                <h3 className="font-bold text-2xl mb-5">
                  The 5 Biggest Cross-Border Shipping Mistakes (Avoid These!)
                </h3>
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
      </div>
    </>
  );
};

export default Industries;