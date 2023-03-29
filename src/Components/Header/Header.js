import React from 'react';
import headerImg from '../../Resources/header.jpg';
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
    return (
        <section className="hero">
            <img className='img-fluid' src={headerImg} alt="" />
        <h1 className='mt-5 text-center'>We Help Your Business <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Grow', 'Finding New Opportunities', 'Website Traffic']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span> </h1>
        <p className='fs-5 text-center'>Our marketing agency specializes in helping businesses increase their online presence and reach their target audience.</p>
        {/* <button>Get Started</button> */}
      </section>
    );
};

export default Header;