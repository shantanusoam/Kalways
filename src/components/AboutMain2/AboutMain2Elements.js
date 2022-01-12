import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

export const TextContaner = styled.div`
display: flex;
padding: 60px 0px 20px 0px;
flex-direction: column;
justify-content: flex-start;
width: 60%;
align-items: flex-start;

`
export const NavLink = styled(LinkR)`
  color: #fff;
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
export const AboutContainer = styled.div`
 background: #fff;
display:flex;
flex-direction: column;
position: relative;   
align-items: center;
justify-content: space-around;
width: auto;
min-height: 100vh;
height:auto;
`
export const TextContainerRow = styled.div`
padding: 60px 0px 20px 0px;

justify-content: flex-start;
width: 60%;
align-items: flex-start;

display:flex;
flex-direction: row;
justify-content: start;
justify-items: center;
`

export const StarightLineBlue  = styled.div`
 border:1px  #2F7DBD solid;
  color:#2F7DBD;
  background-color:#2F7DBD;
  height:10%;
  width:0%;

z-index: 5;
`