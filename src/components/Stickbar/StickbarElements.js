import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const SticNav = styled.nav`
  background: #313131;
  width: 100%;
  display: block;
  position: fixed;
  height: 40px;
  display: flex;
  padding: 0px 50px 0px 0px;
  justify-content: flex-end;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 20;
  @media screen and (max-width: 768px) {
    display: none;
  }
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: end;

  font-size: 1rem;
  top: 0;
  z-index: 20;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  &:hover {
    color: #93cc00;
  }
  &.active {
    color: #ffffff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
