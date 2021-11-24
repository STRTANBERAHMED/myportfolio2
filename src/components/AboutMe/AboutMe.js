import React from 'react';
import pic2 from '../../images/tanber-pic-with-bg2.png';

const AboutMe = () => {
    return (
        <div className="container grid mt-5">
            <div className="row">
                <div className="col-md-5 picture">
                    <img src={pic2} alt="" />
                </div>
                <div className="col-md-7 mt-5 text-start">
                    <h1>Welcome To</h1>
                    <h1><span class="orange-color">MD TANBER</span> World!</h1>
                    <h3>Build Climber and Train Stopper</h3>
                    <p>You might saw me jumping, climbing buildings, and stopping trains. But nobody pays me a dime for that
                        work.
                        That's why I am learning and mastering web development. I will not stop until I become the Web
                        Development
                        Hero. </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;