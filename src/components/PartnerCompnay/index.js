import React from 'react'
import {AboutContainer,CardListRow} from './PartnerCompnayElements'
import KalTire from '../../images/kalTire.png';
import KalTrailerAndLeasing from '../../images/KalTrailerandLeasing.png';
import KalFreight from '../../images/KalFreight.png';
import { animateScroll as scroll,Link } from 'react-scroll';

const PartnerCompnay = ({isOpen,toggle}) => {
    return (
      <AboutContainer id="About">
         
        
         <CardListRow>
         <a href="https://www.kaltires.com/"><img src={KalTire} alt="Kaltire website link" /></a>
         <a href="https://kaltrailers.com/" ><img src={KalTrailerAndLeasing} alt="kaltrailers website link" /></a>
         <a  href="https://kalpartz.com/" ><img src={KalFreight} alt="kalparts website link" /></a>
         
         
             
         </CardListRow>
         


      </AboutContainer>
      
    )
}

export default PartnerCompnay