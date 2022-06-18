import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import pic1 from '../../images/pic1.JPG';
import Header from '../Header/Header';
import './ProfileNew.css';

const ProfileNew = () => {
    return (
        <div className="">
            <Header></Header>
            <div className="home" id="home">
                <div className="social">
                    <a href="https://github.com/STRTANBERAHMED"><i className="bx bxl-github"></i></a>
                    <a href="https://www.facebook.com/str.ahmed.92/"><i className="bx bxl-facebook-circle"></i></a>
                    <a href="https://www.linkedin.com/in/md-tanber-20a92b216/"><i className="bx bxl-linkedin-square"></i></a>
                </div>
                <div className="home-img">
                    <img src={pic1} alt="" />
                </div>
                <div className="home-text">
                    <span>Hello, I'm</span>
                    <h1>Md Tanber</h1>
                    <h2><Typewriter
                        words={[
                            "MERN Stake Developer",
                            "Front End Developer",
                            "Back End Developer",
                        ]}
                        loop={Infinity}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></h2>
                    <p>Waiting for a challenging role, but still exploring new <br />technologies and frameworks which catch my interest!<br /> if you're looking for a developer to add to your team,<br /> I'd love to hear from you!</p>
                    <a href="#contact" className="btn">Contact Me</a>
                </div>

                <div className="scroll-down">
                    <a href="#about">
                        <i className="bx bx-mouse">
                            <span>Scroll Down</span>
                            <i className="bx bxs-down-arrow-alt"></i>
                        </i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileNew;