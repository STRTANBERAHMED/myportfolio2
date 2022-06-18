import React from 'react';
import './Projects.css';
import pic4 from '../../images/i1.png'
import pic5 from '../../images/i2.png'
import pic6 from '../../images/i3.png'

const Projects = () => {
    return (
        <div className="mt-5 portfolio" id="portfolio">
            <div className="heading">
                <h2>My Projects</h2>
                <span>My Recent Work</span>
            </div>
            <div className="portfolio-content">
                <div className="portfolio-img">
                    <img src={pic4} alt="" />
                    <a href="https://dreamland-5fa44.web.app/home" className="project-btn">Live Site</a>
                </div>
                <div className="portfolio-img">
                    <img src={pic5} alt="" />
                    <a href="https://ms-care-335d2.web.app/" className="project-btn">Live Site</a>
                </div>
                <div className="portfolio-img">
                    <img src={pic6} alt="" />
                    <a href="https://car-world-97a21.web.app/home" className="project-btn">Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;