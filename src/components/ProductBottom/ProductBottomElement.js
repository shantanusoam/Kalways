import { FaBars } from 'react-icons/fa';
import {  Link as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

export const TextContaner = styled.div`
display: flex;
padding: 0px 0px 0px 0px;
flex-direction: column;
justify-content: flex-start;
width: 50%;
align-items: flex-start;
align-content: flex-start

`
export const AboutContainer = styled.div`
 background: #fff;
display:flex;
width: auto;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
padding: 20px 0px 30px 0px; 
align-content: flex-start;
justify-content: center;

height:auto;
`
export const ProductSlideImage = styled.div` 
display : flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
align-content: flex-start;
flex-wrap: wrap;
width: 100%;
img{
    padding: 20px;
        max-height: 60%;
        overflow: hidden;
    }
`