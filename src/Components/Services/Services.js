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
            <div className='fs-5 mb-5 container-fluid w-100'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, aliquam minima. Obcaecati laboriosam porro ex,
                facere officiis aut accusantium consequatur nesciunt totam eius nostrum labore error non id illo sapiente,
                accusamus deleniti quam tempore natus illum laudantium corrupti. Consectetur exercitationem, iusto ipsa totam aliquam
                praesentium, dolorem quam dolorum modi cumque expedita quod veniam quidem, provident numquam culpa? Quas, corporis
                pariatur consequuntur cupiditate minima quod obcaecati quia architecto. Rerum amet laudantium omnis officiis blanditiis aut,
                eaque iste reiciendis voluptatem eveniet adipisci corporis eum eligendi neque illum. Numquam molestias mollitia laudantium
                deleniti quibusdam, labore ipsa illo nostrum asperiores quia. Esse facere voluptates enim dolore unde, sit, possimus quos
                tempora, consequuntur dignissimos explicabo assumenda! Eligendi, sit minus illum soluta odit omnis delectus eum dolorem
                nisi ullam cupiditate non aliquam numquam, fuga dicta ex exercitationem. Optio qui consequatur omnis magnam, delectus
                quasi nobis. Quis cupiditate reiciendis voluptatem possimus architecto enim laborum totam tenetur quasi eligendi temporibus,
                natus repudiandae dignissimos tempore molestiae dolorem veritatis necessitatibus qui quas nemo beatae consequatur itaque
                fugiat nisi. Corporis vero et ab fuga magnam veritatis omnis nihil quas? At vero pariatur iste quaerat vel aspernatur quo
                quas nisi sapiente nemo, laudantium itaque, commodi libero delectus consequatur tenetur et eos illum aut quae quis.
                Eveniet sapiente aperiam quis doloremque repellendus tenetur perferendis ullam perspiciatis harum! Pariatur,
                commodi quibusdam ad cupiditate excepturi aut id sequi quaerat sit quisquam error, ex quis adipisci inventore
                veniam vel, voluptate maiores officia fuga illum? Dolore, delectus necessitatibus totam vel accusantium laudantium
                doloribus iure dolorem. Fuga accusamus tenetur ex maiores necessitatibus, quisquam quas repellendus veniam labore at rerum,
                reprehenderit consequatur ea unde? Eaque fugiat sed nam autem enim quos nostrum minus omnis a, animi vitae perspiciatis aliquam,
                doloremque unde vel sit? Expedita ipsam numquam, magnam consectetur voluptatum distinctio fugit repudiandae vel.
                Corporis alias ipsa veritatis dolorem reprehenderit.
            </div>
            <div className="container-fluid row row-cols-1 row-cols-md-3 g-4 mt-5">
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