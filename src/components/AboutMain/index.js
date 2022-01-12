import React from "react";
import {
  AboutContainer,
  TextContaner,
  TextContanerS,
} from "./AboutMainElements";
import whitetruck from "../../images/AbouMain.png";
const AboutMain = ({ isOpen, toggle }) => {
  return (
    <AboutContainer id="About">
      <TextContaner>
        <h1 className="text-left text-black font-bold text-5xl pb-8">
          Together, we'll drive a more sustainable global supply chain.
        </h1>
      </TextContaner>
      <img
        src={whitetruck}
        alt="Our services Truck on black road"
        width="1500rem"
      />
      <TextContanerS>
        <h1 className="text-left text-black font-bold text-4xl pb-8">
          Big Rig Trailers & Leasing INC
        </h1>
        <p className="text-left text-gray-500 text-2xl pb-8 font-bold ">
          kalway’s mission is to move business forward with expertise and
          integrity. That’s why we’re committed to creating smarter, less
          environmentally impactful solutions for our network. Between 2019 and
          2020, we reduced network CO2 emissions by 18% and improved our
          SmartWay rankings. From environmental responsibility and sustainable
          supply chain solutions, to industry insights and partnerships that
          drive innovative thinking – we’re committed to moving towards a
          greener future.
        </p>
      </TextContanerS>
    </AboutContainer>
  );
};

export default AboutMain;
