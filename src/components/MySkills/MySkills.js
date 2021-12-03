import React from 'react';
import './MySkills.css';

const MySkills = () => {
    return (
        <div className="my-5">
            <h1>Skills</h1>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <h1 className="orange-color">Frontend development</h1>
                    <h3>Html5</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">99%</div>
                    </div>
                    <h3>Css3</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '97%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">97%</div>
                    </div>
                    <h3>Javascript</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>
                    <h3>Bootstrap</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '93%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">93%</div>
                    </div>
                    <h3>React</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                    <h3>React Router</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>
                    <h3>React Hook Form</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                    <h3>Firebase</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="orange-color">Backend development</h1>
                    <h3>MongoDB</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                    <h3>Node Js</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">65%</div>
                    </div>
                    <h3>Heroku</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                    <br />
                    <h1 className="orange-color">Tools</h1>
                    <h3>VS Code</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                    <h3>github</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '82%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">82%</div>
                    </div>
                    <h3>Netlify</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                    <h3>Figma</h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '78%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">78%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;