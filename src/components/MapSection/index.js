import React from "react";
import {
  ContactContainer,
  BackgroundImage,
  MapElement,
} from "./MapSectionElements";

const MapSection = ({ isOpen, toggle }) => {
  return (
    <ContactContainer id="Map">
      <MapElement>
        <iframe
          src="https://maps.google.com/maps?q=Canada%20%201225%20Riverside%20Rd,%20Abbotsford,%20BC%20V2S%207P1&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </MapElement>
      <BackgroundImage></BackgroundImage>
    </ContactContainer>
  );
};

export default MapSection;
