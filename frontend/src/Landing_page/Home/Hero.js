import React from 'react';
import {Link} from 'react-router-dom';
function Hero() {
    return (
        <div className='container text-center p-5 m-4 '>
            <img className='offset-2' src='/media/homeHero.png'  style={{width:'80%', height:'80%'}}alt='hero'/>
            <h1 className='offset-2'>Invest in everything</h1>
            <p className='offset-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <Link to="/Signup"><button className='btn btn-primary offset-2'>Sign up for free</button></Link>
        </div>
    )
    
}

export default Hero;