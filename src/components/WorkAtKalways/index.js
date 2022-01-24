import React from 'react';
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
} from './WorkAtKalways';

import { animateScroll as scroll, Link } from 'react-scroll';
const WorkAtKalwayss = ({ isOpen, toggle }) => {
  function refreshPage() {
    hide = 'lol';
    window.location.reload();
  }

  var hide = 'ContactUs';
  return (
    <ContactContainer id="ContactUs">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="pt-20"> </div>
      <ContactForm>
        <Heading style={{ paddingTop: '20px' }}>Work At Kalways</Heading>
        <div
          data-aidaform-widget="form-2019-12"
          data-url="https://shantanu.aidaform.com/work-at-kalways"
          data-width="100%"
          data-height="500px"
          data-do-resize
        ></div>
        <WWOCCButton className="p-8" onClick={refreshPage} id={`${hide}`}>
          Contact Us
        </WWOCCButton>
      </ContactForm>
    </ContactContainer>
  );
};
class ContactSection extends React.Component {
  // componentDidMount() {
  //   window.location.reload(false);
  // }

  render() {
    return <WorkAtKalwayss />;
  }
}
export default WorkAtKalwayss;
