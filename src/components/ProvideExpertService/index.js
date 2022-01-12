import React from "react";

import {
  Conatainer,
  ImageContainer,
  ContentContainer,
  ContentHeadingContainer,
  Heading,
  SubHeading,
  ContentStepsContainer,
  StepNoContainer,
  NoContainer,
  StarightLine,
  StepNoContentContainer,
  SteapHeadingContainer,
  StepHeading,
  StepSubheading,
} from "./ProvideExpertServiceElement";
import OpenTrailer from "../../images/PES.png";
const ProvideExpertService = ({ isOpen, toggle }) => {
  return (
    <>
      <Conatainer>
        <ContentContainer>
          <ContentHeadingContainer>
            <Heading>
              We Provide Expert Services and aim to have a long term with you
            </Heading>
            <SubHeading>
              As a Vanguard authorized dealer, we offer a variety of dry vans
              and refrigerated trailers and flatsbed and chessie.
            </SubHeading>
          </ContentHeadingContainer>
          <ContentStepsContainer>
            <StepNoContainer>
              <NoContainer>01</NoContainer>

              <StarightLine></StarightLine>
              <NoContainer>02</NoContainer>
              <StarightLine></StarightLine>
              <NoContainer>03</NoContainer>
            </StepNoContainer>
            <StepNoContentContainer>
              <SteapHeadingContainer>
                <StepHeading>Premium Performance</StepHeading>
                <StepSubheading>
                  {" "}
                  Every Vanguard trailer is designed and built to include
                  premium performance features that provide valuable operational
                  savings and years of trouble-free service.{" "}
                </StepSubheading>
              </SteapHeadingContainer>
              <SteapHeadingContainer>
                <StepHeading>Long Life</StepHeading>
                <StepSubheading>
                  Vanguard takes great pride in offering superior corrosion
                  protection, high strength and long-life specifications
                </StepSubheading>
              </SteapHeadingContainer>
              <SteapHeadingContainer>
                <StepHeading>Safety first</StepHeading>
                <StepSubheading>
                  Advanced safety components as standard features on every
                  trailer.
                </StepSubheading>
              </SteapHeadingContainer>
            </StepNoContentContainer>
          </ContentStepsContainer>
        </ContentContainer>
        <ImageContainer>
          <img src={OpenTrailer} alt="" width="413px" />
        </ImageContainer>
      </Conatainer>
    </>
  );
};

export default ProvideExpertService;
