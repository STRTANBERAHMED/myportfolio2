import React from 'react';
import pic2 from '../../images/IMG_2975.JPG';
import Appbar from '../Appbar/Appbar';
import Footer from '../Footer/Footer';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <Appbar></Appbar>
            <div className="container grid mt-5">
                <div className="row">
                    <div className="col-md-5 picture">
                        <img className="profile-picture" src={pic2} alt="" />
                    </div>
                    <div className="col-md-7 mt-5 text-start">
                        <h1>My Dream</h1>
                        <h3>Become a Pro Level Web Developer</h3>
                        <p>Hi! I am Md Tanber a Junior Full Stack Developer. I'm developing websites for 6 months. I am confident about my skills, which is helping me to build any website. My comfortable sites are frontend development and error handling. But I am also good at backend development.</p>
                        <br />
                        <p>I already learned HTML5, CSS3, JAVASCRIPT, BOOTSTRAP, TAILWIND, MATERIAL UI, REACT JS, REACT PRIVATE ROUTER, REACT HOOK FORM, FIREBASE etc. I can build any frontend website. My goal is to became a pro level web developer.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutMe;