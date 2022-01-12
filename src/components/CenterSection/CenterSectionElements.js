import { FaBars } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import logo from "../../images/mapBackground.png";
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 55vh;
  postion: fixed;
  margin-top: -330px;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    display: none;
  }
  &:active {
  }
`;
export const MapElement = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 60%;
  background-color: #fff;
  align-items: center;
  position: absolute;
  z-index: 9;
  margin-bottom: 70px;
`;
export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const IContainer = styled.div`
  display: flex;
`;
export const GreenDottedLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ShippingFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ShippingToContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const FormInput = styled.div``;
export const RequestToQuote = styled.button``;
export const BackgroundImage = styled.div`
  height: 40%;
  width: 100%;
  position: relative;

  background-image: url(${logo});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`;
