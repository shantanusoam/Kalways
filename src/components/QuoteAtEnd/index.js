import React from "react";
import {
  WWOCArd,
  WWOCardContent,
  WWOCCHeading,
  WWOCCParagraph,
  WWOCCButton,
  CButton,
} from "./QuoteAtEndElements";

const QuoteAtEnd = ({ isOpen, toggle }) => {
  return (
    <WWOCArd>
      <WWOCardContent>
        <WWOCCHeading>ARE YOU IN UNITED STATES? WE GOT YOUR BACK</WWOCCHeading>
        {/* <WWOCCParagraph>
          Big Rig Trailers & Leasing extended its reach to distribution
          warehouses located in California, Texas, Indiana, North Carolina, and
          New Jersey
        </WWOCCParagraph> */}
        <CButton>
          <WWOCCButton to="/Contact">Contact Us</WWOCCButton>
          <WWOCCParagraph
            to={{ pathname: "https://kaltrailers.com" }}
            target="_blank"
          >
            or see our portfolio
          </WWOCCParagraph>
        </CButton>
      </WWOCardContent>
    </WWOCArd>
  );
};

export default QuoteAtEnd;
