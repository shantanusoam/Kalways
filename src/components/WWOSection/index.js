import React from 'react'
import {WWOContainer,WWOHeding,WWOSubHeding,WWOContent,WWOCardContainer,WWOCArd,WWOCArdImage,WWOCardContent,WWOCCHeading,WWOCCParagraph,WWOCCButton,WWOCardimage} from './WWOSectionElement'
import WWO1 from '../../images/WWO1.png'
import WWO2 from '../../images/WWO2.png'
import WWO3 from '../../images/WWO2.png'
const WWOSection = ({isOpen,toggle}) => {
    return (
      <WWOContainer id="Products">
          <WWOContent>
              {/* <WWOHeding>PRODUCTS</WWOHeding> */}
              <WWOSubHeding>WHAT WE OFFER</WWOSubHeding>
          </WWOContent>
          <WWOCardContainer>
              <WWOCArd>
                  <WWOCardimage>
                  <img src="https://www.sttc.com/wp-content/uploads/2019/02/HUB_6936-1024x547.jpg" alt="" height="250px" />
                  </WWOCardimage>
                  
                  <WWOCardContent>
                      <WWOCCHeading>Commercial Tires</WWOCCHeading>
                      <WWOCCParagraph>The Right Tires For Your Fleet. It’s easy to find the right total solution for your fleet. With a wide selection of innovative commercial truck tires and services to back them up, your fleet can start saving today.</WWOCCParagraph>
                      {/* <WWOCCButton>See More</WWOCCButton> */}
                  </WWOCardContent>
              </WWOCArd>
              <WWOCArd>
              <WWOCardimage><img src="https://i.ytimg.com/vi/VH7cmd_b_v8/maxresdefault.jpg" alt="" height="250px"/></WWOCardimage>
                  
                  <WWOCardContent>
                      <WWOCCHeading>Industrial Tires</WWOCCHeading>
                      <WWOCCParagraph> Whether it is loading or excavating, lifting or material handling – you are looking for reliable high-performance tires so that you can do your job in full safety. Browse for your tire based on your specific type of industrial machinery</WWOCCParagraph>
                      {/* <WWOCCButton>See More</WWOCCButton> */}
                  </WWOCardContent>
              </WWOCArd>
              <WWOCArd>
              <WWOCardimage><img src="https://images.squarespace-cdn.com/content/543c3a59e4b077a66498c452/1415220244173-956TAMXXHV69512U5BK6/New+%26+Used+OTR+Tires?format=1000w&content-type=image%2Fjpeg" alt="" height="250px" width="450"/></WWOCardimage>
                  
                  <WWOCardContent>
                      <WWOCCHeading>Earthmover Tires</WWOCCHeading>
                      <WWOCCParagraph> Mining and construction are the toughest sectors on Earth. So are the requirements for equipment – and tires, of course. Browse for your tire to see which performance features best suit your specific needs</WWOCCParagraph>
                      {/* <WWOCCButton>See More</WWOCCButton> */}
                  </WWOCardContent>
              </WWOCArd>
          </WWOCardContainer>
          
      </WWOContainer>
      
    )
}

export default WWOSection