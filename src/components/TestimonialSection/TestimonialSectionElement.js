import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

import styled from 'styled-components';
import bgimage from '../../images/testimonialbg.png';
export const TestimonialContainer = styled.div`
background: transparent url(${bgimage}) no-repeat center center;
display:flex;
flex-direction: column;
align-items: center;

width: 100%;
height: auto;
`
export const TestimonialHeading = styled.h2`
z-index: 10;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 47px;
text-align: center;

color: #FFFFFF;
padding-top: 40px;

@media screen and (max-width: 768px) {
    font-size: 40px;
}
@media screen and (max-width: 480px) {
    font-size: 32px;
}
`
export const Testimonials = styled.div`
display:flex;
flex-direction: row;
margin-top: 100px;
align-items: flex-start;
padding-bottom: 100px;
@media screen and (max-width: 480px) {
    flex-direction: column;
}
`
export const Testimonial = styled.div`
display:flex;

flex-direction: row;
padding:0px 50px 0px 50px;
align-items: center;
`

export const TestimonialContent = styled.div`
display:flex;
flex-direction: column;

align-items: flex-start
`

export const TParagraph= styled.p`
padding: 20px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;

color: #FFFFFF;


max-width: 60rem;
@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 18px;
}

`
export const TNameHeading = styled.h2`
padding: 0px 20px 0px 20px;
z-index: 10;
width: 185px;
height: 23px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 23px;

color: #FFFFFF;



@media screen and (max-width: 768px) {
    font-size: 0px;
}
@media screen and (max-width: 480px) {
    font-size: 12px;
}
`
export const ImageContainer = styled.div`

border-radius: 53.5px;
padding: 20px;
height: 50px;
width: 50px;
background-size: cover;
 display: block;
background: transparent url("https://www.kapwing.com/resources/content/images/2019/06/final_5d13fa73b1d9e60014650935_716840.jpg")  50% 50% no-repeat ;
`