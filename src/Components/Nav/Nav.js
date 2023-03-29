import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to='/home' className="navbar-brand">BA3</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className='text-decoration-none' to='/home'>Home</Link>
              </li>
              <li className="nav-item ms-3">
                <Link className='text-decoration-none' to='/services'>Services</Link>
              </li>
              <li className="nav-item ms-3">
                <Link className='text-decoration-none' to='/about'>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Nav;