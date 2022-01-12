import React from 'react'
import {WCUContainer,WCUHeding,WCUSubHeding,WCUContent,WCUCardContainer,WCUCard,WCUCardImage,WCUCardContent,WCUCHeading,WCUCParagraph,WCUCButton,BlueDot,GroupContent} from './WCUSectionElement'
import WCUTire from '../../images/WCUTire.png'

const WCUSection = ({isOpen,toggle}) => {
    return (
      <WCUContainer id="Advantages">
          <WCUContent>
              <WCUHeding>Advantages</WCUHeding>
              <WCUSubHeding>WHY CHOOSE US</WCUSubHeding>
          </WCUContent>
          <WCUCardContainer>
              <WCUCard>
                  
                  <WCUCardContent>
                  {/* <BlueDot/> */}
                  <GroupContent>
                 
                  <WCUCHeading>24/7 Nationalwide Road Services</WCUCHeading>
                  <WCUCHeading>On Site Services
                  </WCUCHeading>
                  
                  </GroupContent>
                      
                      
                  </WCUCardContent>

                  <WCUCardContent>
                  {/* <BlueDot/> */}
                  <GroupContent>
                  <WCUCHeading>Scheduled Maintainence Program</WCUCHeading>
                      <WCUCHeading>
         Mounted Wheel Program
                      </WCUCHeading>
                      
                </GroupContent>
                      
                      
                  </WCUCardContent>
              </WCUCard>
              <WCUCard>
                  <img src={WCUTire} alt="" />
                  
              </WCUCard>
              <WCUCard>
                  
                  <WCUCardContent>
                  {/* <BlueDot/> */}
                      <GroupContent>
                      <WCUCHeading>Trucks And Trailers Alignments</WCUCHeading>
                      <WCUCHeading>
            Heavy Duty Front-End Work
                      </WCUCHeading>
                      
                      
                      </GroupContent>
                      
                      
                  </WCUCardContent>
                  <WCUCardContent>
                      {/* <BlueDot/> */}
                  <GroupContent>
                  <WCUCHeading>Tire Mounting and Balancing</WCUCHeading>
                  <WCUCHeading>Pick Up And Delivery Service</WCUCHeading>
                  <WCUCHeading></WCUCHeading>
                     
                  </GroupContent>
                      
                      
                  </WCUCardContent>
              </WCUCard>
          </WCUCardContainer>
          
      </WCUContainer>
      
    )
}

export default WCUSection