import React from "react";
import { SticNav, NavLink, Bars, NavMenu } from "./StickbarElements";

const Stickbar = () => {
  return (
    <>
      <SticNav>
        <NavMenu>
          <NavLink to="/" activeStyle></NavLink>

          <NavLink to="/" activeStyle>
            Track Your Shipment
          </NavLink>
          <NavLink to="/" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/" activeStyle>
            Work at KalWay
          </NavLink>
          {/* <NavLink to="/" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/" activeStyle>
            Georgia
          </NavLink>
          <NavLink to="/" activeStyle>
            New Jersey
          </NavLink>
          <NavLink to="/" activeStyle>
            Canada
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </SticNav>
    </>
  );
};

export default Stickbar;
