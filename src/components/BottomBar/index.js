import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logo.png';
import logo1 from '../../images/vanguard.png';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll, Link } from 'react-scroll';

import {
  Nav,
  NavMenu,
  NavBtn,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
} from './BottomBarElements';

const BottomBar = ({ toggle }) => {
  const [scrollNav] = useState(false);
  // const changeNav = ()=> {
  //   if(window.scrollY >= 100) {
  //     setScrollNav(true)
  //   }
  //   else{
  //     setScrollNav(false)
  //   }
  // }
  // useEffect(()=>{
  //   window.addEventListener('scroll',changeNav)
  // },[]);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavLogo to="/" onClick={toggleHome}>
          <h3 className="text-left text-gray-200 font-bold lg:text-2xl md:text-3xl">
            BIG-RIG
          </h3>
        </NavLogo>

        {/* <Bars onClick={toggle}/> */}
        <NavMenu>
          <NavItem>
            <NavLinks to="/" onClick={toggleHome}>
              <a to="/">Home</a>
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/About" onClick={toggleHome}>
              <a to="/About">About</a>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/products" onClick={toggleHome}>
              <a
                to="/products"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Products
              </a>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Contact" onClick={toggleHome}>
              <a to="/Contact">Contact</a>
            </NavLinks>
          </NavItem>
          {/* <NavItem>
            
          <NavLinks >
          <Link to='ContactUs' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link>
          </NavLinks>
          </NavItem> */}

          <MobileIcon onClick={toggle}>{/* <FaBars/> */}</MobileIcon>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <h3 className="text-left text-gray-200 font-bold text-1xl">
            @ Copyright KALWAY Trailer and Leasing
          </h3>
        </NavBtn>
        {/* <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon> */}
      </Nav>
    </>
  );
};

export default BottomBar;
