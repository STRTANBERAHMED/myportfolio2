import React from 'react';
import './About.css';
import pic2 from '../../images/pic2.JPG';

const About = () => {
    return (
        <div className="about" id="about" data-aos="fade-down-right" data-aos-duration="1800">
            <div className="heading">
                <h2>About</h2>
                <span>Introduction</span>
            </div>
            <div className="about-container">
                <div className="about-img">
                    <img src={pic2} alt="" />
                </div>
                <div className="about-text">
                    <p>He is a passionate developer and loves to do that and wants to work with them where he can learn
                        something new. He did some group projects and explored new technologies such as Mongoose and Redux.
                        He loves to code in a much cleaner way so that anyone can understand. As a Full Stack Developer,
                        finished many projects with front end and backend using react, javascript, node.js, express.js and
                        mongodb. I am always energetic and eager to learn new skills. Adept at contributing to a highly
                        collaborative work environment and determined to finding a solution.</p>
                    <div className="information">
                        {/* <!-- Box 1 --> */}
                        <div className="info-box">
                            <i className="bx bxs-user"></i>
                            <span>MD Tanber</span>
                        </div>
                        {/* <!-- Box 2 --> */}
                        <div className="info-box">
                            <i className="bx bxs-phone"></i>
                            <span>+905527316001</span>
                        </div>
                        {/* <!-- Box 3 --> */}
                        <div className="info-box">
                            <i className="bx bxs-envelope"></i>
                            <span>md.tanber4433@gmail.com</span>
                        </div>
                    </div>
                    <a href="/contactForm" className="btn">Contact Me</a>
                </div>
            </div>
        </div>
    );
};

export default About;