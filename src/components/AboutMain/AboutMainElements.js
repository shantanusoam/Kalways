import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const TextContaner = styled.div`
  display: flex;
  position: absolute;
  padding: 0px 0px 20px 0px;
  flex-direction: column;
  justify-content: center;
  margin-top: -200px;
  width: 60%;
  background-color: #000000de;
  align-items: center;
  h1 {
    line-height: 5rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const TextContanerS = styled.div`
  display: flex;
  padding: 90px 0px 20px 6rem;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 10px;
  }
`;
export const AboutContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: left;
  justify-content: space-around;
  width: auto;
  min-height: 100vh;
  height: auto;
`;
