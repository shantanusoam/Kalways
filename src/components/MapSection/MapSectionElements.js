import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';
import logo from '../../images/mapBackground.png'
export const ContactContainer = styled.div`

display:flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
width: 100%;
height: 55vh;
@media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    display: none;
  }
&:active{
    
}
`
export const MapElement = styled.div`
height: 40%;
width: 60%;
align-items: center;
position: absolute;
z-index: 9;
margin-bottom: 70px;

`
export const BackgroundImage = styled.div`
height: 40%;
width: 100%;
position: relative;

background-image: url(${logo});
background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`