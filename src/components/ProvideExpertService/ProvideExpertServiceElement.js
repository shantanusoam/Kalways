import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

export const Conatainer = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 90vh;
overflow: hidden;
@media screen and (max-width: 768px) {
  height: 100vh;
  flex-direction: column;
}   
`
export const ImageContainer  = styled.div`
@media screen and (max-width: 768px) {
  display:none;
  
}
`
export const ContentContainer  = styled.div`
display:flex;
flex-direction: column;
justify-content: start;
align-items:flex-start;
@media screen and (max-width: 768px) {
  width: 100%;
  
  
}
`
export const ContentHeadingContainer  = styled.div`
padding: 0px 50px 30px 0px;
@media screen and (max-width: 768px) {
  padding: 20px;
  margin: 0;
}
`
export const Heading  = styled.div`
padding: 5px;
z-index: 10;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 16px;
    font-size: 2vw;


width: 35rem;
color: #010101;

@media screen and (max-width: 768px) {
    font-size: 30px;
    width: 100%;
    padding-bottom: 10px;
}
@media screen and (max-width: 480px) {
    font-size: 20px;
}
`
export const SubHeading  = styled.div`
padding: 5px;
z-index: 10;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;


width: 35rem;
color: #232536;

@media screen and (max-width: 768px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) {
    font-size: 15px;
    width: 100%;
}
`
export const ContentStepsContainer  = styled.div`
display:flex;
flex-direction: row;
justify-content: start;

`
export const StepNoContainer  = styled.div`
display:flex;
position: relative;
flex-direction: column;
justify-content: space-between;
align-items : center;
`
export const NoContainer  = styled.div`

border-radius: 50%;
text-align: center;
padding-top: 10px;
margin: 25px;
width:  45PX;
height: 45PX;

background: #93CC00;
z-index: 5;
@media screen and (max-width: 768px) {
    margin: 5px;
    padding-top: 10px;
    width:  45PX;
height: 45PX;
z-index: 5;
font-size: 1rem;
color: #fff;
}
:hover {
    animation: pulse 2s ;
}

@keyframes pulse {
    0% {
      background-color: #587804;
      width:  45PX;
        height: 45PX;
    }
    100% {
      background-color: #93CC00;
      width:  45PX;
        height: 45PX;
    }
  }
`

export const StarightLine  = styled.div`
 border:1px dashed #93CC00;
  color:#fff;
  background-color:#fff;
  height:10%;
  width:0%;


z-index: 5;
@media screen and (max-width: 768px) {
   margin: 0;
   padding: 0;
}
`
export const StepNoContentContainer  = styled.div`
display:flex;
flex-direction: column;
justify-content: start;
@media screen and (max-width: 768px) {
   margin-top: 30px;
   padding: 0;
}

`
export const SteapHeadingContainer  = styled.div`
display:flex;
margin: 25px;
flex-direction: column;
justify-content: start;
@media screen and (max-width: 768px) {
    margin: 5px;
    width: 100%;
}
@media screen and (max-width: 480px) {
    margin: 5px;
    width: 100%;
}

`
export const StepHeading  = styled.div`
padding: 5px;
z-index: 10;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 26px;


width: 35rem;
color: #010101;

@media screen and (max-width: 768px) {
    font-size: 20px;
    width: 90%;
    color: #1E1B1B;
}
@media screen and (max-width: 480px) {
    font-size: 27px;
    color: #1E1B1B;
}
@media (min-width:300px) and (max-width:400px) {
    font-size: 20px;
}​
`
export const StepSubheading  = styled.div`
padding: 5px;
z-index: 10;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;


width: 35rem;
color: #938D8D;

@media screen and (max-width: 768px) {
    font-size: 20px;
    width: 90%;
    color: #938D8D;
}
@media screen and (max-width: 480px) {
    font-size: 15px;
    color: #938D8D;
}
@media screen and (max-width: 390px) {
    font-size: 12px;
    color: #938D8D;
}
@media (min-width:300px) and (max-width:400px) {
    font-size: 10px;
}​
`