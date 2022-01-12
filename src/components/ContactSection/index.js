import React from "react";
import {
  ContactContainer,
  ContactForm,
  ContactImage,
  FotterNav,
  WWOCCButton,
  FotterContact,
  FotterContactlist,
  FotterContactNo,
  FotterContactName,
  Heading,
} from "./ContactSEctionElements";

import { animateScroll as scroll, Link } from "react-scroll";
const ContactSectio = ({ isOpen, toggle }) => {
  function refreshPage() {
    hide = "lol";
    window.location.reload();
  }

  var hide = "ContactUs";
  return (
    <ContactContainer id="ContactUs">
      <ContactForm>
        <Heading style={{ paddingTop: "20px" }}>
          Get in touch with our experts
        </Heading>
        <div
          data-aidaform-widget="form-2019-12"
          data-url="https://shantanu.aidaform.com/kalway"
          data-width="100%"
          data-height="500px"
          data-do-resize
        ></div>
        <WWOCCButton className="p-8" onClick={refreshPage} id={`${hide}`}>
          Contact Us
        </WWOCCButton>
      </ContactForm>

      <ContactImage>
        <footerMobileContainer>
          <FotterNav>
            <FotterContact>
              <FotterContactlist>
                <FotterContactName>Address</FotterContactName>
                <FotterContactNo>
                  1225 Riverside Rd, Abbotsford, BC V2S 7P1, Canada
                </FotterContactNo>

                <FotterContactName>United states</FotterContactName>
                <FotterContactNo>
                  California, Texas, Indiana, New jersey and North Caroline
                  {/* Finsweet@gmail.com */}
                </FotterContactNo>
              </FotterContactlist>
            </FotterContact>
            {/* <hr align="left" width="100%"></hr> */}
            <FotterContact>
              <FotterContactlist>
                <FotterContactName>Contact Details</FotterContactName>
                <FotterContactNo>
                  (604) 864 3100
                  {/* Finsweet@gmail.com */}
                </FotterContactNo>
              </FotterContactlist>
            </FotterContact>
            {/* <hr align="left" width="100%"></hr> */}
            <FotterContact>
              <FotterContactlist>
                <FotterContactName>Opening Hours</FotterContactName>
                <FotterContactNo>
                  Monday to Friday 8:00 AM to 5:00 PM
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
      </ContactImage>
    </ContactContainer>
  );
};
class ContactSection extends React.Component {
  // componentDidMount() {
  //   window.location.reload(false);
  // }

  render() {
    return <ContactSectio />;
  }
}
export default ContactSection;
