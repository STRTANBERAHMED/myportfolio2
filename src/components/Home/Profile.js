import React from 'react';
import './Profile.css';
import Appbar from '../Appbar/Appbar';
import pic1 from '../../images/IMG_0018.JPG';

const Profile = () => {
    return (
        <div className="profile">
            <Appbar></Appbar>
            <div className="p-5 mt-5">
                <div className="row">
                    <div className="col-md-7 mt-5 text-start">
                        <h1>Hi,</h1>
                        <h1>I'm <span className="orange-color">MD TANBER</span></h1>
                        <h2>Junior Full Stack Web Developer</h2>
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