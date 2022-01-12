import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

export const WCUContainer = styled.div`
 background: #ffff;
display:flex;
flex-direction: column;
align-items: center;

width: 100%;
height: auto;
`
export const WCUHeding = styled.h1`

z-index: 10;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 20px;

text-align: center;

color: #ED1C24;

@media screen and (max-width: 768px) {
    font-size: 10px;
}
@media screen and (max-width: 480px) {
    font-size: 12px;
}
`

export const WCUSubHeding = styled.p`
margin-top: 24px;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 35px;

text-align: center;

color: #000;
max-width: 20rem;
@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const WCUContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 90px;

`


export const WCUCardContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
@media screen and (max-width: 768px) {
    flex-direction: column;
  }

`
export const BlueDot = styled.div`
display: block;
width: 18px;
height: 18px;
z-index: 10;
border-radius: 50%;
background: #0076C8;
 
@media screen and (max-width: 768px) {
   
  }

`
export const GroupContent = styled.div`
display: flex;
flex-direction:column;
align-items: flex-start;
@media screen and (max-width: 768px) {
    flex-direction: column;
  }

`

export const WCUCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

export const WCUCardContent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-items: flex-start;
padding: 80px 90px 80px 90px;

`

export const WCUCHeading = styled.h2`
z-index: 10;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 42px;
padding: 10px 20px 10px 20px;
color: #3D3D3D;

@media screen and (max-width: 768px) {
    font-size: 30px;
}
@media screen and (max-width: 480px) {
    font-size: 20px;
}
`
// export const WCUCParagraph = styled.p`
// margin-top: 4px;
// font-family: Poppins;
// font-style: normal;
// font-weight: normal;
// font-size: 18px;
// line-height: 21px;
// text-align: justify;
// width: 50%;
// color: #727272;


// max-width: 60rem;
// @media screen and (max-width: 768px) {
//     font-size: 18px;
//     width: 70%;
// }
// @media screen and (max-width: 480px) {
//   font-size: 15px;
//     width: 60%;
// }

// `
// export const WCUCButton = styled(LinkR)`
//   border-radius: 50px;
//   background: #0074C9;
//   padding: 10px 22px;
//   white-space: nowrap;
//   padding: 10px 22px;
//   font-size: 16px;
//   color: #fff;
//   outline: none;
//   border: none;
  
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   /* Second Nav */
//   margin-left: 24px;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `;