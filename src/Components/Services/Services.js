import React from 'react';
import seoImg from '../../Resources/Services/seo.jpg';
import socialImg from '../../Resources/Services/social.png';
import contentImg from '../../Resources/Services/Content.jpg';

const Services = () => {
    return (
        <>
            <h2 className='mt-5 mb-5 text-center'>Our <span style={{color: 'orangered'}}>Services</span></h2>
            <div class="container-fluid row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={seoImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Search Engine Optimization (SEO)</h5>
                            <p class="card-text">We optimize your website to rank higher in search engine results pages (SERPs), driving more organic traffic to your site.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img style={{height: '230px'}} src={socialImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Social Media Marketing</h5>
                            <p class="card-text">We develop and execute social media marketing campaigns to increase brand awareness and engagement with your target audience.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img style={{height: '230px'}} src={contentImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Content Development</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cupiditate expedita ut minima corporis nemo nesciunt sapiente, culpa exercitationem corrupti.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;