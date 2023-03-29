import React from 'react';
import Nav from '../Nav/Nav';

const About = () => {
    return (
        <>
            {/* <Nav></Nav> */}
            <h2 className='mt-5 mb-3 text-center'>About us</h2>
            <p className='text-md-center fs-5'>We're a team of experienced marketers who are passionate about helping businesses succeed.
                With our expertise in digital marketing, we're able to develop custom strategies tailored
                to your business goals and target audience.</p>
            <div>
                <h2 className='mb-5 mt-5 text-center'>Contact us</h2>
                <form className='w-75 container-fluid'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Message</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
};

export default About;