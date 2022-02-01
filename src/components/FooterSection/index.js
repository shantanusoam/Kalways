import React from 'react';
import logo from '../../images/logo.png';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

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
} from './FooterSectionElements';

const FooterSection = ({ isOpen, toggle }) => {
  return (
    <FooterContainer id="Footertag">
      <FooterLogo>
        <div className="mt-10">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h1 className="pt-10 font-bold text-xl   text-white">
              © KalWay Inc, 2022 All rights reserved.
            </h1>
          </div>
        </div>
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
              <FotterContactNo>1-800-502-7000</FotterContactNo>
              {/* //todo */}
            </FotterContactlist>
          </FotterContact>
          <FotterContact>
            <FotterContactlist>
              <FotterContactName>Email</FotterContactName>
              <FotterContactNo>info@KALWAY.com</FotterContactNo>
              {/* //todo */}
            </FotterContactlist>
          </FotterContact>

          {/* <hr align="left" width="100%"></hr> */}
          <FotterContact>
            <FotterContactlist>
              <FotterContactName>Address</FotterContactName>
              <FotterContactNo>
                10156 Live Oak Ave, Fontana, CA 92335
              </FotterContactNo>
            </FotterContactlist>
          </FotterContact>

          {/* <hr align="left" width="100%"></hr> */}
          <FotterContact>
            <FotterContactlist>
              <FotterContactName>We are open</FotterContactName>
              <FotterContactNo>
                Monday - Friday 24Hrs
                <br />
                Saturday & Sunday 7AM -5PM
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
