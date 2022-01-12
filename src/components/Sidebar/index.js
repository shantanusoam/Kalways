import React from "react";
import {
  CloseIcon,
  Icon,
  SlidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkR,
  SideBtnWrap,
  SidebarRoute,
} from "./SlidebarElement";
import { animateScroll as scroll, Link } from "react-scroll";
const Sidebar = ({ isOpen, toggle }) => {
  function disabel() {
    const path = window.location.pathname;
    console.log(path === "/");
    if (path === "/") {
      return true;
    }
    return false;
  }
  return (
    <SlidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkR to="/">
            <a to="/" onClick={toggle}>
              Home
            </a>
          </SidebarLinkR>

          <SidebarLinkR to="/About">
            <a onClick={toggle} to="/About">
              About
            </a>
          </SidebarLinkR>
          {disabel() ? (
            <SidebarLink>
              <Link href="Product" onClick={toggle}>
                Product
              </Link>
            </SidebarLink>
          ) : null}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/Contact">
            <addEventListener
              to="/Contact"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Contact
            </addEventListener>
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SlidebarContainer>
  );
};

export default Sidebar;
