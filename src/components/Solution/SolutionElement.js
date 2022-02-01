import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import bgimage from '../../images/QuoteAtEnd.png';
import Mbgimage from '../../images/mobilequote.png';

export const WWOCArd = styled.div`
  background-color: #fff;
  display: flex;
  padding: 0px 0px 0px 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding: 0;
    margin: 0;
    height: auto;
  }
`;

export const WWOCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
export const WWOCardimage = styled.div`
  background-image: url();
`;

export const WWOCCHeading = styled.h2`
  padding: 20px;
  margin-top: 4px;
  font-family: Poppins;
  font-style: normal;

  font-size: 4rem;

  text-align: center;

  color: #111;

  max-width: 90rem;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    padding: 90px 0px 90px 0px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 25px;
    padding: 90px 0px 90px 0px;
    text-align: center;
  }
`;
export const CButton = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`;
export const WWOCCParagraph = styled(LinkR)`
  padding: 20px;
  margin-top: 4px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  word-spacing: 5px;
  text-align: center;

  color: #111;

  max-width: 90rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const WWOCCButton = styled(LinkR)`
  padding: 25px;
  display: block;

  background: #93cc00;
  padding: 10px 22px;
  white-space: nowrap;
  padding: 20px 92px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: none;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flew-wrap: wrap;
  padding: 90px 0px 0px 0px;
`;
export const FlipCard = styled.div`
  padding: 40px;

  img {
    position: relative;
    z-index: 1;
  }
`;
export const FrontFace = styled.div``;
export const BackFace = styled.div``;
export const HoveringTextContainer = styled.div`
  z-index: 2;
  position: absolute;
  height: 200px;
  width: 300px;
  right: 700px;
  bottom: -100px;
  background-color: #ff2f;
`;
export const NavLink = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  &.active {
    color: #1e1b1b;
  }
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #93cc00;
  }
  &.active {
    color: #15cdfc;
  }
  @media screen and (max-width: 768px) {
    dispaly: none;
  }
`;
export const LinkRo = styled(LinkR)``;
export const AboutContainer = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 10px 0px 10px 0px;

  justify-content: center;
  min-height: 100vh;
  height: auto;
  @media screen and (max-width: 768px) {
    padding: 40px 0px 0px 0px;

    margin: 0px;
  }
`;
export const CardListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 0px 0px 0px 0px;

    margin: 0px;
  }
`;
