import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

export const AboutContainer = styled.div`
 background: #C1C1C1;
display:flex;
flex-direction: row;
align-items: center;

width: 100%;
height: auto;
padding-bottom: 50px;
@media screen and (max-width: 768px) {
  display:flex;
flex-direction: column;
align-items: center;

}
`
export const AboutTireHolder = styled.div`
display: flex;
flex-direction: row;
width: 50%;
padding-top: 30px;
margin-left: 5%;
align-items: center;
padding-bottom: 50px;
@media screen and (max-width: 768px) {
  display:flex;
  width: 100%;
  
flex-direction: column;
align-items: center;

}

`
export const ImageTire = styled.div`
display: block;
width: 20px;





@media screen and (max-width: 768px) {
  
}
`
export const ATHSectionInfo = styled.div`
display:flex;
flex-direction: column;
z-index: 2;
width : 100%;
align-items: flex-start;
@media screen and (max-width: 768px) {
  display:flex;
  width: 100%;

flex-direction: column;
align-items: center;

}

`

export const ATHSectionInfo2 = styled.div`
display:flex;
flex-direction: column;
z-index: 2;
width : 100%;
margin-left: -10%;
align-items: flex-start

`
export const SpaceForTire = styled.div`
display: flex;
width: 100%;
`
export const SIHeading = styled.h2`
z-index: 10;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;

color: #3D3D3D;

@media screen and (max-width: 768px) {
    font-size: 25px;
}
@media screen and (max-width: 480px) {
    font-size: 20px;
}
`
export const SIPara = styled.p`
margin-top: 4px;
font-family: Poppins;
width: 60%;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: justify;
padding: 20px 20px 20px 0px;
color: #727272;


max-width: 60rem;
@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 18px;
}

`
export const SIButton = styled(LinkR)`
  border-radius: 50px;
  background: #0074C9;
  padding: 10px 22px;
  white-space: nowrap;
  padding: 10px 32px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: none;
  
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */


  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`; 
