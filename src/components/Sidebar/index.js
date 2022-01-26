import React from 'react';
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
} from './SlidebarElement';
import { animateScroll as scroll, Link } from 'react-scroll';
const Sidebar = ({ isOpen, toggle }) => {
  function disabel() {
    const path = window.location.pathname;
    console.log(path === '/');
    if (path === '/') {
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
          <SidebarLinkR to="/products">
            <a
              to="/products"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
            >
              Services
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/ShipFlight">
            <a
              onClick={toggle}
              to="/ShipFlight"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
            >
              Carriers
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/Shipper">
            <a
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
              to="/Shipper"
            >
              Shipper
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/Shipfreight">
            <a
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
              to="/Shipfreight"
            >
              Shipfreight
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/Industries">
            <a
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
              to="/Industries"
            >
              Industries
            </a>
          </SidebarLinkR>
        </SidebarMenu>
        <SideBtnWrap className="mt-4">
          <SidebarRoute to="/Contact">
            <addEventListener
              to="/Contact"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
            >
              Contact
            </addEventListener>
          </SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap className="mt-4">
          <SidebarRoute to="/WorkAtKalway">
            <addEventListener
              to="/WorkAtKalway"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
            >
              Work At KALWAY
            </addEventListener>
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SlidebarContainer>
  );
};

export default Sidebar;
