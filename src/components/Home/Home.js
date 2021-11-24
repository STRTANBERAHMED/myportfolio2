import React from 'react';
import Profile from './Profile';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Home;