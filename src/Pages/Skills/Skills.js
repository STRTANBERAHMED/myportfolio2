import React from 'react';
import pic3 from '../../images/skills.png';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills mt-5" id="skills">
            <div className="heading">
                <h2>Skills</h2>
                <span>My Skills</span>
            </div>
            <div className="skills-container">
                <div className="bars">
                    {/* <!-- Box 1 --> */}
                    <div className="bars-box">
                        <h3>HTML</h3>
                        <span>94%</span>
                        <div className="light-bar"></div>
                        <div className="percent-bar html-bar"></div>
                    </div>
                    {/* <!-- Box 2 --> */}
                    <div className="bars-box">
                        <h3>CSS</h3>
                        <span>94%</span>
                        <div className="light-bar"></div>
                        <div className="percent-bar css-bar"></div>
                    </div>
                    {/* <!-- Box 3 --> */}
                    <div className="bars-box">
                        <h3>Javascript</h3>
                        <span>74%</span>
                        <div className="light-bar"></div>
                        <div className="percent-bar js-bar"></div>
                    </div>
                    {/* <!-- Box 4 --> */}
                    <div className="bars-box">
                        <h3>React</h3>
                        <span>80%</span>
                        <div className="light-bar"></div>
                        <div className="percent-bar react-bar"></div>
                    </div>
                </div>
                <div className="skills-img">
                    <img src={pic3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skills;