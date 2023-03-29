import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
           {/* <Nav></Nav>  */}
           <Header></Header>
           <Services></Services>
           <About></About>
           <Footer></Footer>
        </>
    );
};

export default Home;