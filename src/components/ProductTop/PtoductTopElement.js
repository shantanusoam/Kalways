import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

export const TextContaner = styled.div`
display: flex;
padding: 0px 0px 20px 90px;
flex-direction: column;
justify-content: flex-start;

align-items: flex-start;
@media screen and (max-width: 768px) {
  padding: 10px 10px 10px 10px;
}
`
export const AboutContainer = styled.div`
 background: #fff;
display:flex;
width: 100%;
align-items: flex-start;
flex-wrap: wrap;
flex-direction: row;
padding: 210px 0px 30px 0px; 

justify-content: center;
min-height: auto;
height:auto;
@media screen and (max-width: 768px) {
  padding: 10px 10px 10px 10px;
}
`
export const ContainerCorsole = styled.div`

width: 1000px;
`
export const WWOCCParagraph = styled.p`

padding: 20px;
margin-top: 4px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 21px;

text-align: start;

color: #fff;


max-width: 60rem;
@media screen and (max-width: 768px) {
    font-size: 14px;
}
@media screen and (max-width: 480px) {
    font-size: 10px;
}

`
export const WWOCCButton = styled(LinkR)`
padding: 25px;
display: block;
  
  background: #93CC00;
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
 

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
    display: none;
}
`;
export const CButton = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
align-items: center;

`