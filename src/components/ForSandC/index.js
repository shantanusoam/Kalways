import React from "react";
import containers from "../../images/Ccontainers.png";
import Hcontainers from "../../images/Hcontainers.png";

import "./style.css";
import {
  WWOCArd,
  ImageContainer,
  ImageContainers,
  SandCcontainer,
  WWOCardContent,
  WWOCCHeading,
  WWOCCParagraph,
  CardListRow,
  LinkRo,
  NavLink,
} from "./SolutionElement";
import Fade from "react-reveal/Fade";
import { CardContainer } from "../Solution/SolutionElement";
const ForSandC = ({ isOpen, toggle }) => {
  return (
    <WWOCArd>
      <ImageContainers>
        <ImageContainer>
          <img src={containers} alt=""></img>
        </ImageContainer>
        <ImageContainer>
          <img src={Hcontainers} alt=""></img>
        </ImageContainer>
      </ImageContainers>

      <SandCcontainer>
        <div class="whole">
          <div class="container">
            <h1>For Shippers</h1>
            <p>
              Get access to capacity and equipment solutions, regardless of
              market conditions.
            </p>
            <button class="btn" id="m4">
              <span class="btn-text">Request a freight quote</span>
            </button>
            <button class="btn">
              <span class="btn-text">
                Sign up for <br></br> Kalway
              </span>
            </button>
          </div>
          <div class="vl"></div>
          <div class="container">
            <h1>For Carriers</h1>
            <p>
              Instantly book your preferred loads and consistent lanes to keep
              your fleet hauling.
            </p>
            <button class="btn2" id="m4">
              <span class="btn-text">Login</span>
            </button>
            <button class="btn2">
              <span class="btn-text">Sign up</span>
            </button>
          </div>
        </div>
      </SandCcontainer>
    </WWOCArd>
  );
};

export default ForSandC;
