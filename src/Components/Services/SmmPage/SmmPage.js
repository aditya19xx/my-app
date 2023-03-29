import React from 'react';
import socialImg from '../../../Resources/Services/social.png';
import fbMarketingImg from '../../../Resources/Services/fbmarketing.jpg';
import igMarketingImg from '../../../Resources/Services/igmarketing.jpg';
import tiktokMarketingImg from '../../../Resources/Services/tiktokmarketing.jpg';
import ytMarketingImg from '../../../Resources/Services/ytmarketing.jpg';
import { Link } from 'react-router-dom';

const SmmPage = () => {
    return (
        <>
            <div>
                <h2 className='text-center mb-5 mt-5'>Social <span style={{ color: 'blueviolet' }}> Media</span> Marketing</h2>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <img className='img-fluid' src={socialImg} alt="" />
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

            <div class="row row-cols-1 row-cols-md-2 g-4 mt-5 container-fluid">
                <div class="col">
                    <div class="card">
                        <img style={{ height: '400px' }} src={fbMarketingImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fs-3">Facebook Marketing</h5>
                            <p class="card-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, a provident?
                                Quasi illum dignissimos dolor minima aperiam quibusdam nostrum debitis placeat deserunt officia dolore ipsum
                                laudantium unde commodi, quae cum, doloribus, in obcaecati. Nostrum dicta quam doloribus dolor eligendi voluptatibus
                                quaerat veritatis aliquid praesentium ipsa rem, nihil odio non suscipit? </p>
                        </div>
                        <Link className='text-center' to='/contactus'> <button type="button" class="btn btn-outline-primary">Contact us</button> </Link>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{ height: '400px' }} src={igMarketingImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fs-3">Instagram Marketing</h5>
                            <p class="card-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci in voluptatibus pariatur beatae
                                exercitationem sequi blanditiis ipsum quia labore? Officia error perferendis doloribus, recusandae voluptatem non
                                voluptas vel facilis quibusdam laborum nostrum, blanditiis similique id iste nesciunt facere ut sit aut?
                                Sunt assumenda debitis culpa non nihil, in unde corporis? </p>
                        </div>
                        <Link className='text-center' to='/contactus'> <button type="button" class="btn btn-outline-primary">Contact us</button> </Link>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{ height: '400px' }} src={tiktokMarketingImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fs-3">Tiktok Marketing</h5>
                            <p class="card-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit totam illo odit,
                                harum saepe facere autem impedit in accusantium esse est similique nostrum natus tenetur repudiandae odio fuga
                                perspiciatis! Ea eveniet perferendis officiis fugit consectetur necessitatibus rerum, accusamus adipisci commodi
                                quaerat at voluptates voluptatem reprehenderit repellendus doloribus veniam repellat temporibus. </p>
                        </div>
                        <Link className='text-center' to='/contactus'> <button type="button" class="btn btn-outline-primary">Contact us</button> </Link>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{ height: '400px' }} src={ytMarketingImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fs-3">Youtube Marketing</h5>
                            <p class="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium nostrum,
                                ut minima autem suscipit obcaecati voluptas explicabo doloribus, blanditiis, reprehenderit pariatur ab alias
                                rerum eligendi dolor voluptatem nesciunt corrupti illo quisquam nulla. Eum doloremque ad libero odio repellat,
                                quae impedit id maiores possimus natus optio sed, numquam perspiciatis delectus. </p>
                        </div>
                        <Link className='text-center' to='/contactus'> <button type="button" class="btn btn-outline-primary">Contact us</button> </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SmmPage;