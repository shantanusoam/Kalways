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
} from './NavbarElements';

const Navbar = ({ toggle, Speed }) => {
  const [scrollNav, setScrollNav] = useState(false);
  console.log(Speed);
  const changeNav = () => {
    // if (Speed) {
    //   setScrollNav(false);
    // }
    if (window.scrollY >= 100 || Speed) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  function disabeled() {
    console.log(Boolean(window.localStorage.getItem('product')));
    return window.localStorage.getItem('product');
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
        <Nav scrollNav={scrollNav}>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={logo} width="150px" alt="logo" />
          </NavLogo>

          {/* <Bars onClick={toggle}/> */}
          <NavMenu>
            {/* <NavItem>
              <NavLinks to="/" onClick={toggleHome}>
                <a to="/">Home</a>
              </NavLinks>
            </NavItem> */}

            <NavItem>
              <NavLinks
                to="/About"
                activeClassName="active"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                onClick={toggleHome}
              >
                <a to="/About">About</a>
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="/products"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                activeClassName="active"
              >
                <a to="/products">Services</a>
              </NavLinks>
            </NavItem>

            {/* <NavItem>
              <NavLinks to="/Contact" onClick={toggleHome}>
                <a to="/Contact">Request To Quote</a>
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks
                to="/ShipFlight"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                activeClassName="active"
              >
                <a to="/ShipFlight">Carriers</a>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/Shipper"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                activeClassName="active"
              >
                <a to="/Shipper">Shipper</a>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/Shipfreight"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                activeClassName="active"
              >
                <a to="/Shipfreight">Shipfreight</a>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/Industries"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                activeClassName="active"
              >
                <a to="/Industries">Industries</a>
              </NavLinks>
            </NavItem>
            {/* <NavItem>
            
          <NavLinks >
          <Link to='ContactUs' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link>
          </NavLinks>
          </NavItem> */}
            <br />
            <br />
            <br />
            <MobileIcon onClick={toggle}>
              <FaBars color="#fff" />
            </MobileIcon>

            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          {/* <NavBtn>
            <h3 className=" text-white font-bold text-1xl">Signup</h3>
          </NavBtn> */}
          {/* <NavBtn>
            <h3 className=" text-white font-bold border-2 p-3 text-1xl">
              Login
            </h3>
          </NavBtn> */}
          {/* <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon> */}
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
