import React from 'react';
import Profile from './Profile';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div id="home">
            <Profile></Profile>
            <MyProjects></MyProjects>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;