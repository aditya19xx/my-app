import React from 'react';
import seoImg from '../../../Resources/Services/seo.jpg';
import keywordImg from '../../../Resources/Services/keyword.jpg';
import emailImg from '../../../Resources/Services/email.jpg';

const SeoPage = () => {
    return (
        <>
            <div>
                <h2 className='text-center mb-5 mt-5'>Search <span style={{ color: 'blueviolet' }}>Engine</span> Optimization (SEO)</h2>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <img className='img-fluid' src={seoImg} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-items-center fs-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum placeat laudantium nesciunt maxime! Harum laboriosam, dolorem, labore esse doloribus,
                        earum cum autem dignissimos explicabo quidem itaque iure error numquam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis voluptatem, hic necessitatibus mollitia exercitationem aliquam tempore ab maxime maiores nesciunt.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque explicabo error maxime,
                        eveniet distinctio nisi facilis hic sed numquam.
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center mb-5 mt-5'>Keyword <span style={{ color: 'blueviolet' }}>Research</span></h2>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-6 col-sm-12 d-flex align-items-center fs-5 g-2">

                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum placeat laudantium nesciunt maxime! Harum laboriosam, dolorem, labore esse doloribus,
                        earum cum autem dignissimos explicabo quidem itaque iure error numquam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis voluptatem, hic necessitatibus mollitia exercitationem aliquam tempore ab maxime maiores nesciunt.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque explicabo error maxime,
                        eveniet distinctio nisi facilis hic sed numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Rerum nihil eum dicta quos quas. Accusamus vero sequi maiores officiis iste!
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img className='img-fluid' src={keywordImg} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center mb-5 mt-5'> <span style={{ color: 'blueviolet' }}>Email</span> Marketing</h2>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                    <img className='img-fluid' src={emailImg} alt="" />
                       
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-items-center fs-5 g-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum placeat laudantium nesciunt maxime! Harum laboriosam, dolorem, labore esse doloribus,
                        earum cum autem dignissimos explicabo quidem itaque iure error numquam obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis voluptatem, hic necessitatibus mollitia exercitationem aliquam tempore ab maxime maiores nesciunt.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque explicabo error maxime,
                        eveniet distinctio nisi facilis hic sed numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Rerum nihil eum dicta quos quas. Accusamus vero sequi maiores officiis iste!
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default SeoPage;