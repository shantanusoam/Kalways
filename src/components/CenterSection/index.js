import React from "react";
import {
  ContactContainer,
  BackgroundImage,
  MapElement,
  ImagesContainer,
  IContainer,
  GreenDottedLine,
  DataContainer,
  ShippingFormContainer,
  ShippingToContainer,
  FormInput,
  RequestToQuote,
} from "./CenterSectionElements";

const CenterSection = ({ isOpen, toggle }) => {
  return (
    <ContactContainer id="Map">
      <MapElement>
        <ImagesContainer>
          <IContainer></IContainer>
          <IContainer></IContainer>
          <IContainer></IContainer>
          <IContainer></IContainer>
        </ImagesContainer>
        <GreenDottedLine></GreenDottedLine>
        <form>
          <DataContainer>
            <ShippingFormContainer>
              <h2>Where are you shipping from?</h2>
              <ShippingFormContainer
                name="email"
                type="email"
                label="email"
                required
              />
            </ShippingFormContainer>
            <ShippingToContainer>
              <h2>Where are you shipping to?</h2>
              <FormInput name="email" type="email" label="email" required />
            </ShippingToContainer>
            <h2>Moving furniture or personal items?</h2>
            <RequestToQuote type="submit">
              Request a freight quote?
            </RequestToQuote>
          </DataContainer>
        </form>
      </MapElement>
      <BackgroundImage></BackgroundImage>
    </ContactContainer>
  );
};

export default CenterSection;
