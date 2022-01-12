import React from "react";
import { Pattern, RAfQContainer, TTSContainer } from "./RFQTTSElement";
import { AiOutlineArrowRight } from "react-icons/ai";
const RFQTTS = () => {
  return (
    <Pattern>
      <RAfQContainer>
        <div className="">request a freight quote</div>
        <AiOutlineArrowRight></AiOutlineArrowRight>
      </RAfQContainer>
      <TTSContainer>
        <div className="">request a freight quote</div>
        <AiOutlineArrowRight></AiOutlineArrowRight>
      </TTSContainer>
    </Pattern>
  );
};

export default RFQTTS;
