import React from 'react';
import './Projects.css';
import Appbar from '../Appbar/Appbar';
import Footer from '../Footer/Footer';

const Projects = () => {
    return (
        <div>
            <Appbar></Appbar>
            <h1 className="projects">this is projects</h1>
            <Footer></Footer>
        </div>
    );
};

export default Projects;