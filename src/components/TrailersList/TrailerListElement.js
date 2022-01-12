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
 padding: 0px 0px 0px 0px;
 margin: 0px;
}
`

export const NavLink = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  &.active{
    color: #1E1B1B;
  }
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    color: #93CC00;
  };
  &.active {
    color: #15cdfc;
  };
  @media screen and (max-width: 768px) {
  dispaly: none;
}
`;
export const LinkRo = styled(LinkR)`
 
`;
export const AboutContainer = styled.div`
 background: #fff;
display:flex;
width: 100%;
align-items: center;
justify-content: center;
flex-wrap: wrap;
flex-direction: column;
padding: 10px 0px 10px 0px; 

justify-content: center;
min-height: 100vh;
height:auto;
@media screen and (max-width: 768px) {
    padding: 40px 0px 0px 0px;

 margin: 0px;
}
`
export const CardListRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
@media screen and (max-width: 768px) {
    padding: 0px 0px 0px 0px;

 margin: 0px;
}
`