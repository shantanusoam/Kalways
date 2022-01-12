import React, { useState, useEffect } from 'react';
import './loopApp.css';
import desktopImage from '../../images/Bg.png';
import mobileImage from '../../images/Bg.png'
import EmblaCarousel from "./EmblaCarousel";
const Herosection = () => {
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
                <h1>Pineapples</h1>
                <p>They are good</p>
            </div>
        </div>
    );
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
};

export default Herosection;