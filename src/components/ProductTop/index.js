import React from 'react'
import {AboutContainer,TextContaner ,WWOCCParagraph,WWOCCButton,CButton,ContainerCorsole} from './PtoductTopElement'
import EmblaCarousel from "./EmblaCarousel";
import {Trailers} from '../../trailer.js'
import whitetruck from '../../images/ProductTop.png';
import { animateScroll as scroll,Link } from 'react-scroll';
const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());


class ProductTop extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : Trailers[this.props.id]
    }
}
  
  render() {
    const PageComponent = this.props.component

    return (
      
      <AboutContainer id="About">
        <ContainerCorsole>
        <EmblaCarousel slides={slides} id={this.props.id} />
        </ContainerCorsole>
          
        {/* <TextContaner>
            <h3 className="text-left text-black font-bold text-3xl pb-8">{this.state.data.title} #</h3>
            <p className="text-left text-gray-800 pb-8">Super fast, easy control trailer </p>
            <h1 className="text-left text-black font-bold text-5xl pb-8">$ 4.500,00 </h1>
            <h4 className="text-left text-gray-800 pb-8 text-2xl font-bold">Trailer features: </h4>
            <p className="text-left text-gray-800 pb-8">- Feature 1</p>
            <p className="text-left text-gray-800 pb-8">- Feature 2</p>
            <p className="text-left text-gray-800 pb-8">- Feature 3</p>
            <p className="text-left text-gray-800 pb-8">- Feature 4</p>
             
        </TextContaner> */}
        <TextContaner>
        <h3 className="text-left text-black font-bold pt-8 text-3xl pb-8">{this.state.data.title}</h3>
        <p className="text-left text-gray-800 pt-8 pb-8 w-60">{this.state.data.Description}</p>
        {/* <CButton className="pt-20"><WWOCCButton><Link to='/#'  smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link></WWOCCButton><WWOCCParagraph>or see our portfolio</WWOCCParagraph></CButton> */}
        </TextContaner>
        
      </AboutContainer>
    )
  }
}
export default ProductTop