import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import States from './States';
import Education from './Education';
import OpenAcc from '../OpenAcc';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Pricing from './Pricing';
function HomePage() {
    return (  
        <>
        
        <Hero/>
        <Awards/>
        <States/>
        <Pricing/>
        <Education/>
        <OpenAcc/>
        
        </>
    );
}

export default HomePage;