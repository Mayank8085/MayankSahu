import React from 'react';
import Header from './component/Header';
import Home from './component/Home';
import Project from './component/Project';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';

const Main = () => {
    return (
        <div>
         <Header/>
         <Home/>
         <About/>
         <Project/>
         <Contact/>
         <Footer/>
        </div>
    );
}

export default Main;
