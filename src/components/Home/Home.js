import React from 'react';
import Profile from './Profile';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;