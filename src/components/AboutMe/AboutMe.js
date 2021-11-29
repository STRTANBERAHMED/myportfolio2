import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import pic2 from '../../images/tanber-pic-with-bg2.png';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="container grid mt-5">
            <div className="row">
                <div className="col-md-5 picture">
                    <img src={pic2} alt="" />
                </div>
                <div className="col-md-7 mt-5 text-start">
                    <h1>Dream Big</h1>
                    <h3>Become a Pro Level Web Developer</h3>
                    <p>I already learned HTML5, CSS3, JAVASCRIPT, BOOTSTRAP, TAILWIND, MATERIAL UI, REACT JS, REACT PRIVATE ROUTER, REACT HOOK FORM, FIREBASE etc. I can build any frontend website. My goal is to became a pro level web developer.</p>
                    <NavLink to='/contactMe'>
                        <Button className="link-button" variant="dark">
                            Contact Me
                        </Button>
                    </NavLink>
                    {/* <a className="link-button" target="_blank" href="Md-Tanber-Resume.pdf" download="Md-Tanber-Resume.pdf">Contact Me</a> */}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;