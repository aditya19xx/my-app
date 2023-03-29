import React from 'react';
import headerImg from '../../Resources/header.jpg';

const Header = () => {
    return (
        <section className="hero">
            <img className='img-fluid' src={headerImg} alt="" />
        <h1 className='mt-5 text-center'>We Help Your Business Grow</h1>
        <p className='fs-5 text-center'>Our marketing agency specializes in helping businesses increase their online presence and reach their target audience.</p>
        {/* <button>Get Started</button> */}
      </section>
    );
};

export default Header;