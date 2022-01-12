import React from "react";
import trucks from "../../images/LOTSOFTRUCKS.png";
import Containers from "../../images/comtaimer.png";
import Shiping from "../../images/shiping.png";
import "./style.css";
import {
  WWOCArd,
  WWOCardContent,
  WWOCCHeading,
  WWOCCParagraph,
  CardListRow,
  LinkRo,
  NavLink,
} from "./SolutionElement";
import Fade from "react-reveal/Fade";
const Solution = ({ isOpen, toggle }) => {
  return (
    <WWOCArd>
      <WWOCardContent>
        <WWOCCHeading>
          Supply chain solutions to fuel your business. Insights to make it
          succeed.
        </WWOCCHeading>
        <WWOCCParagraph>
          Work with a trusted global third-party logistics provider that has
          been empowering business growth for over 15 years. Our centralized
          marketplace connects you to the people, technology, data and capacity
          – full truckload, less than truckload (LTL), intermodal and other
          capacity or asset solutions – needed to take your supply chain
          further, faster.
        </WWOCCParagraph>
        <CardListRow>
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
                  src={trucks}
                  alt="boy with camera"
                  className=" h-80 w-full object-cover"
                />

                <div className="p-8">
                  {/* <h3 className="font-bold text-2xl mb-5">Build a Card</h3> */}
                  <br />
                  <h3 className=" text-1xl mb-5 ">
                    Tap into a marketplace that matches over 10.000 shipments a
                    day
                  </h3>
                  <button class="btn">
                    <span class="btn-text">Request a freight quote</span>
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
                  {/* <h3 className="font-bold text-2xl mb-5">Build a Card</h3> */}
                  <br />
                  <h3 className=" text-1xl mb-5 ">
                    Scale up or down with flexible multimodal and equipment
                    solutions
                  </h3>
                  <button class="btn">
                    <span class="btn-text">Request a freight quote</span>
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
                  {/* <h3 className="font-bold text-2xl mb-5">Build a Card</h3> */}
                  <br />
                  <h3 className=" text-1xl mb-5 ">
                    Easily manage and track your freight on demand using KALWAY
                  </h3>
                  <button class="btn">
                    <span class="btn-text">Request a freight quote</span>
                  </button>
                </div>
              </div>
            </Fade>
          </div>
        </CardListRow>
        {/* <CardContainer>
          <FlipCard>
            <FrontFace>
              <img
                src="https://kalway.com/wp-content/uploads/2020/02/Markerplace_HP_Flipcard.jpg"
                alt=""
              />
              <HoveringTextContainer>
                Tap into a marketplace that matches over 10,000 shipments a day.
              </HoveringTextContainer>
            </FrontFace>
            <BackFace></BackFace>
          </FlipCard>
          <FlipCard>
            <FrontFace>
              <img
                src="https://kalway.com/wp-content/uploads/2020/02/Multi-Modal_hp_Flipcard.jpg"
                alt=""
              />
              <HoveringTextContainer>
                Tap into a marketplace that matches over 10,000 shipments a day.
              </HoveringTextContainer>
            </FrontFace>
            <BackFace></BackFace>
          </FlipCard>
          <FlipCard>
            <FrontFace>
              <img
                src="https://kalway.com/wp-content/uploads/2020/02/Multi-Modal_hp_Flipcard.jpg"
                alt=""
              />
              <HoveringTextContainer>
                Tap into a marketplace that matches over 10,000 shipments a day.
              </HoveringTextContainer>
            </FrontFace>
            <BackFace></BackFace>
          </FlipCard>
        </CardContainer> */}
        {/* <CButton>
          <WWOCCButton to="/Contact">Contact Us</WWOCCButton>
          <WWOCCParagraph
            to={{ pathname: "https://kaltrailers.com" }}
            target="_blank"
          >
            or see our portfolio
          </WWOCCParagraph>
        </CButton> */}
      </WWOCardContent>
    </WWOCArd>
  );
};

export default Solution;
