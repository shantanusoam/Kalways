import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import bgimage from '../../images/ContactTire.png';
import { mobile, laptop } from '../../responsive';
export const ContactContainer = styled.div`
  background: #fff;
  display: flex;

  align-items: center;
  padding: 50px;
  width: 100%;
  padding-top: 100px;
  justify-content: center;
  height: 130vh;
  overflow: hidden;
  // @media screen and (max-width: 768px) {
  //     transition: 0.8s all ease;
  //     padding-top: 0px;
  //     margin-bottom: 20px;
  //   }
  &:active {
  }
  @media screen and (max-width: 3024px) {
    padding: 0px 0px 0px 0px;
  }
`;

export const ContactForm = styled.div`
  /* display: flex;
flex-direction: column;
align-items: flex-start; */
  margin-top: 15rem;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  div {
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 40%;
    }
  }
`;
export const ContactImage = styled.div`
  display: flex;
  width: 40%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const AboutContainerHeading = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  color: #ed1c24;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const AboutContainerSubHeading = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;

  color: #010101;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const footerMobileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;
export const FooterLogo = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FotterNav = styled.div`
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex: 0 0 200px;
    flex-direction: column;
  }
`;
export const FotterNavH = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  padding: 20px;
  padding-right: 50px;
  padding-left: 50px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const FotterContact = styled.div`
  display: flex;
  width: 35rem;
  padding: 0px 70px 0px 70px;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex: 0 0 200px;
    flex-direction: column;
  }
`;
export const FotterContactlist = styled.div`
  padding: 0px;
  padding-right: 80px;
  padding-left: 80px;
  width: 150%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const FotterContactName = styled.div`
  padding: 20px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  justify-content: center;
  font-family: Poppins;
  font-weight: bold;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;

  /* identical to box height, or 31px */

  color: #1e1b1b;

  opacity: 0.6;

  color: #1e1b1b;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const Heading = styled.div`
  padding: 4.5rem 0px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;

  font-family: Roboto;
  font-weight: bold;

  font-size: 55px;

  color: #000;
`;
export const FotterHName = styled.div`
  padding: 20px 0px 20px 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 68.21%;
  justify-content: center;

  font-family: Poppins;
  font-weight: bold;

  font-size: 40px;

  color: #1e1b1b;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const FotterContactNo = styled.div`
  display: flex;
  text-align: flex-start;
  justify-content: center;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;

  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  /* identical to box height, or 150% */

  letter-spacing: -0.03em;

  color: #1e1b1b;
  padding: 20px 0px 0px 0px;
  color: #1e1b1b;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 17px;
  }
`;

export const FotterContactN = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;

  padding: 60px 0px 0px 0px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 17px;
  }
`;
export const FotterSocialMedia = styled.div`
  display: flex;
  padding: 40px;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const WWOCCButton = styled(LinkR)`
  padding: 25px;
  display: block;
  display: flex;
  justify-content: center;
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
    background: #93cc00;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
