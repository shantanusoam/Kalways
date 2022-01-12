import React from 'react'
import {AboutContainer,ProductSlideImage,TextContaner} from './ProductBottomElement'
import whitetruck from '../../images/ProductTop.png';
import { animateScroll as scroll,Link } from 'react-scroll';
import {Trailers} from '../../trailer.js'

class ProductBottom extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : Trailers[this.props.id]
    }
}
  componentDidMount() {
    document.title = "BigRig Product"
  }
    
  render() {
    const PageComponent = this.props.component

    return (
      <AboutContainer id="About">
        <ProductSlideImage>
        {/* <img src={whitetruck} alt=""  height="200px" width="320px"/>
        <img src={whitetruck} alt="" height="200px" width="320px"/>
        <img src={whitetruck} alt="" height="200px" width="320px"/>
        <img src={whitetruck} alt="" height="200px" width="320px"/> */}
     
        </ProductSlideImage>
        <TextContaner>
        <h3 className="text-left text-black font-bold text-5xl pb-8">{this.state.data.title}</h3>
        <p className="text-left text-gray-800 text-2xl pb-8">{this.state.data.Description}</p>
        </TextContaner>
       
      </AboutContainer>
    )
  }
}
export default ProductBottom