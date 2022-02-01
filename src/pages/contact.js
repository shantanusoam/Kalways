import React, { useState, useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';

const Contac = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disabel, setdisabel] = useState(
    () => window.localStorage.getItem('product') ?? false
  );
  useEffect(() => {
    // Update the document title using the browser API
    disabeled() ? setdisabel(true) : setdisabel(false);
    window.localStorage.setItem('product', disabel);
  });

  function disabeled() {
    const path = window.location.pathname;
    console.log(path === '/');
    if (path === '/') {
      return true;
    }
    return false;
  }
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div style={{ PaddingTop: '200px' }}>
        <ContactSection></ContactSection>
        <MapSection></MapSection>
      </div>
    </>
  );
};
class Contact extends React.Component {
  componentDidMount() {
    document.title = 'KALWAY Contact';
  }

  render() {
    const PageComponent = this.props.component;

    return <Contac />;
  }
}

export default Contact;
