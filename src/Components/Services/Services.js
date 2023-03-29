import React from 'react';
import seoImg from '../../Resources/Services/seo.jpg';
import socialImg from '../../Resources/Services/social.png';
import contentImg from '../../Resources/Services/Content.jpg';
import './services.css';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <h2 className='mt-5 mb-5 text-center'>Our <span style={{ color: 'orangered' }}>Services</span></h2>
            <div className="container-fluid row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 service-card">
                        <img src={seoImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Search Engine Optimization (SEO)</h5>
                            <p className="card-text">We optimize your website to rank higher in
                                search engine results pages (SERPs), driving more organic traffic to your site.</p>
                                <Link to='/seopage'> <button type="button" className="mt-4 btn btn-outline-primary">Know more</button> </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 service-card">
                        <img style={{ height: '230px' }} src={socialImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Social Media Marketing</h5>
                            <p className="card-text">We develop and execute social media marketing campaigns to
                                increase brand awareness and engagement with your target audience.</p>
                                <Link to='/smmpage'> <button type="button" className="mt-4 btn btn-outline-primary">Know more</button> </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 service-card">
                        <img style={{ height: '230px' }} src={contentImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Content Development</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Facilis cupiditate expedita ut minima corporis nemo nesciunt sapiente, culpa exercitationem corrupti.</p>
                                <Link to='/contentpage'> <button type="button" className="mt-4 btn btn-outline-primary">Know more</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;