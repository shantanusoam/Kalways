import React from 'react';
import { Pattern, RAfQContainer, TTSContainer } from './RFQTTSElement';
import { AiOutlineArrowRight } from 'react-icons/ai';
const RFQTTS = () => {
  return (
    <Pattern>
      <RAfQContainer>
        <div className="">Happy to have you</div>
        <AiOutlineArrowRight></AiOutlineArrowRight>
      </RAfQContainer>
      <TTSContainer>
        <div className="">Happy to have you</div>
        <AiOutlineArrowRight></AiOutlineArrowRight>
      </TTSContainer>
    </Pattern>
  );
};

export default RFQTTS;
