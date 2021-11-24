import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="my-4">
            <h1 className="title">Skills</h1>
            <div className="row">
                <div className="col-md-6 full-stack-experience experience-item">
                    <h2 className="developer">Front end Developer</h2>
                    <p>I am the master of HTML, CSS and Javascript. I know everything needed to make a website function,
                        efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called
                        Vue
                        JS. I am also good at some css frameworks like bootstrap, tailwind and material ui. I can make full responsive website</p>
                </div>
                <div className="col-md-6 full-stack-experience experience-item">
                    <h2 className="developer">Back end Developer</h2>
                    <p>My ability level in back end is intermediate. I am steel learning. But i can say you that if you give me the work then i can show you my ability. I sure that my work will not upset you.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-5 web-dev-experience experience-item">
                    <h2 className="title">React</h2>
                    <p>I am so good in react. But i am steel learning. Because there is no end to education. I am master in es6, reactRouter and auth contexts. I can make full website by using react.</p>
                </div>
                <div className="col-md-6 mt-5 web-dev-experience experience-item">
                    <h2 className="title">Debugging</h2>
                    <p>Debugging is my favorite work in development. I can solve any error. My ability in error handling is 100%. So you should  trust me first time and then i am sure that you will offer me second work automatically.</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;