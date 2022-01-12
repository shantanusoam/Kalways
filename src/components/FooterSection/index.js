import React from "react";

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import {
  FooterContainer,
  SocialMediaActions,
  FooterLogo,
  FotterNav,
  FotterContact,
  FotterContactlist,
  FotterContactNo,
  FotterContactName,
  SocialMediaActionsContainer,
  footerMobileContainer,
  FotterHName,
} from "./FooterSectionElements";

const FooterSection = ({ isOpen, toggle }) => {
  return (
    <FooterContainer id="Footertag">
      <FooterLogo>
        <FotterHName>Get in touch with us for your service</FotterHName>

        {/* <SocialMediaActionsContainer>
        <SocialMediaActions>
             <FaFacebook/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaTwitter/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaInstagram/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaLinkedin/>
            </SocialMediaActions>
          </SocialMediaActionsContainer> */}
      </FooterLogo>
      <footerMobileContainer>
        <FotterNav>
          <FotterContact>
            <FotterContactlist>
              <FotterContactName> Help line Number</FotterContactName>
              <FotterContactNo>(604) 864 3100</FotterContactNo>
              {/* //todo */}
            </FotterContactlist>
          </FotterContact>
          <FotterContact>
            <FotterContactlist>
              <FotterContactName>Email</FotterContactName>
              <FotterContactNo>trailers@KALWAY.com</FotterContactNo>
              {/* //todo */}
            </FotterContactlist>
          </FotterContact>

          {/* <hr align="left" width="100%"></hr> */}
          <FotterContact>
            <FotterContactlist>
              <FotterContactName>Canada</FotterContactName>
              <FotterContactNo>
                1225 Riverside Rd, Abbotsford, BC V2S 7P1, Canada
              </FotterContactNo>
            </FotterContactlist>
          </FotterContact>
          <FotterContact>
            <FotterContactlist>
              <FotterContactName>United State</FotterContactName>
              <FotterContactNo>
                California, Texas, Indiana, New jersey and North Caroline
              </FotterContactNo>
            </FotterContactlist>
          </FotterContact>
          {/* <hr align="left" width="100%"></hr> */}
          <FotterContact>
            <FotterContactlist>
              <FotterContactName>We are open</FotterContactName>
              <FotterContactNo>
                Monday to Friday , 8:00 AM to 5:00 PM
              </FotterContactNo>
            </FotterContactlist>
          </FotterContact>
          {/* <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions> */}
          {/* <FotterNavH>Email</FotterNavH> */}
          {/* <FotterNavH>Company</FotterNavH>
                <FotterNavH>Advantages</FotterNavH>
                <FotterNavH>Products</FotterNavH>
                <FotterNavH>Contact</FotterNavH> */}
        </FotterNav>
      </footerMobileContainer>

      {/* <FotterSocialMedia>
            <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions>
            <SocialMediaActions>
                <FaTwitter/>
            </SocialMediaActions>
            <SocialMediaActions>
                <FaInstagram/>
            </SocialMediaActions>
          </FotterSocialMedia> */}
      {/* <FotterContactN>
        © Kal Tires Inc, 2021 All rights reserved.{" "}
      </FotterContactN> */}
    </FooterContainer>
  );
};

export default FooterSection;
