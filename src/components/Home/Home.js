import React from 'react';
import Profile from './Profile';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;