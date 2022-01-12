import React from 'react'
import {AboutContainer,TextContaner ,TextContainerRow,StarightLineBlue} from './AboutMain2Elements'
import whitetruck from '../../images/AbouMain.png';
const AboutMain2 = ({isOpen,toggle}) => {
    return (
      <AboutContainer>
        <TextContaner>
            <h1 className="text-left text-black font-bold text-6xl pb-8">This is a  headline</h1>
            <p className="text-left text-gray-800 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.</p>
            <br/>
            <br/>
            <br/>
            <p className="text-left text-gray-800 pb-8">
Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada.</p>
        </TextContaner>
        <img src={whitetruck} alt="" width="1500rem"/>
        <TextContaner>
            <h1 className="text-left text-black font-bold text-5xl pb-8">This is a  headline</h1>
            <p className="text-left text-gray-800 pb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.</p>
        
           
        </TextContaner>
            <TextContainerRow>
            <StarightLineBlue></StarightLineBlue>
            <p className="text-left text-gray-800">
            
nim vel, venenatis mollis ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada.</p>
            </TextContainerRow>
           
        
      </AboutContainer>
      
    )
}

export default AboutMain2