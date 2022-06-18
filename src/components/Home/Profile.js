import React from 'react';
import './Profile.css';
import Appbar from '../Appbar/Appbar';
import pic1 from '../../images/IMG_0018.JPG';
import { Typewriter } from 'react-simple-typewriter';
import Header from '../../Pages/Header/Header';

const Profile = () => {
    return (
        <div className="profile">
            {/* <Appbar></Appbar> */}
            <Header></Header>
            <div className="p-5 mt-5">
                <div className="row">
                    <div className="col-md-7 mt-5 text-start">
                        <h1>Hi,</h1>
                        <h1>I'm <span className="orange-color"><Typewriter
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
                        /></span></h1>

                        {/* <h2>Junior Full Stack Web Developer</h2> */}
                        <h3>Build Your Own Website</h3>
                        <br />
                        <a className="link-button" target="_blank"
                            href="Md-Tanber-Resume.pdf" download="Md-Tanber-Resume.pdf">Resume</a>
                    </div>
                    <div className="col-md-5 picture">
                        <img className="profile-picture" src={pic1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;