import React from 'react';
import Profile from './Profile';
import Footer from '../Footer/Footer';
import MyProjects from '../MyProjects/MyProjects';
import MySkills from '../MySkills/MySkills';

const Home = () => {
    return (
        <div id="home">
            <Profile></Profile>
            <MyProjects></MyProjects>
            <MySkills></MySkills>
            <Footer></Footer>
        </div>
    );
};

export default Home;