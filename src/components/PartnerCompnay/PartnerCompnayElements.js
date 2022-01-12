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
min-height: 20vh;
height:auto;
img{
    padding: 0px 80px 0px 80px;
    @media screen and (max-width: 768px) {
    padding: 0;

 margin: 0px;
}
}
@media screen and (max-width: 768px) {
    padding: 40px 0px 0px 0px;

 margin: 0px;
}
`