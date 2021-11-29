import React from 'react';
import './Profile.css';
import Appbar from '../Appbar/Appbar';
import pic1 from '../../images/tanber-pic-with-bg.png';

const Profile = () => {
    return (
        <div className="profile">
            <Appbar></Appbar>
            <div className="p-5 mt-5">
                <div className="row">
                    <div className="col-md-7 mt-5 text-start">
                        <h1>Welcome To</h1>
                        <h1><span class="orange-color">MD TANBER</span> World!</h1>
                        <h3>Build Your Own Website</h3>
                        <p>I'm developing websites for 6 months. I am confident about my skills, which is helping me to build any website. My comfortable sites are frontend development and error handling. But I am also good at backend development.</p>
                        <a className="link-button" target="_blank" href="Md-Tanber-Resume.pdf" download="Md-Tanber-Resume.pdf">Download My Resume</a>
                    </div>
                    <div className="col-md-5 picture">
                        <img src={pic1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;