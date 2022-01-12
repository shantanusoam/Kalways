import React from 'react'
import {TestimonialContainer,TestimonialHeading,Testimonials,Testimonial,TestimonialContent,TNameHeading,TParagraph,ImageContainer } from './TestimonialSectionElement'

const TestimonialSection = ({isOpen,toggle}) => {
    return (
      <TestimonialContainer>
          <TestimonialHeading>Our clients speaks for ourselves</TestimonialHeading>
          <Testimonials>
              <Testimonial>
                  <ImageContainer> <img src="" alt="" /></ImageContainer>
                 
                  <TestimonialContent>
                      <TNameHeading>Firstname Lastname</TNameHeading>
                      <TParagraph>Partnerships & Project Marketing Services Specialist
Big Company Pty</TParagraph>
                  </TestimonialContent>
              </Testimonial>
              <Testimonial>
                  <ImageContainer> <img src="" alt="" /></ImageContainer>
                 
                  <TestimonialContent>
                      <TNameHeading>Firstname Lastname</TNameHeading>
                      <TParagraph>Partnerships & Project Marketing Services Specialist
Big Company Pty</TParagraph>
                  </TestimonialContent>
              </Testimonial>
              <Testimonial>
                  <ImageContainer> <img src="" alt="" /></ImageContainer>
                 
                  <TestimonialContent>
                      <TNameHeading>Firstname Lastname</TNameHeading>
                      <TParagraph>Partnerships & Project Marketing Services Specialist
Big Company Pty</TParagraph>
                  </TestimonialContent>
              </Testimonial>
          </Testimonials>
      </TestimonialContainer>
      
    )
}

export default TestimonialSection