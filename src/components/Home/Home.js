import React from 'react';
import Profile from './Profile';
import Footer from '../Footer/Footer';
import MyProjects from '../MyProjects/MyProjects';
import MySkills from '../MySkills/MySkills';
import ProfileNew from '../../Pages/ProfileNew/ProfileNew';
import About from '../../Pages/About/About';
import Skills from '../../Pages/Skills/Skills';
import Services from '../../Pages/Services/Services';
import Projects from '../../Pages/Projects/Projects';
import FooterNew from '../../Pages/FooterNew/FooterNew';

const Home = () => {
    return (
        <div id="home">
            {/* <Profile></Profile> */}
            <ProfileNew></ProfileNew>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Projects></Projects>
            {/* <MyProjects></MyProjects> */}
            {/* <MySkills></MySkills>
            <Footer></Footer> */}
        </div>
    );
};

export default Home;