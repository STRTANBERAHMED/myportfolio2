import React, { useEffect, useState } from 'react';
import './Projects.css';
import Appbar from '../Appbar/Appbar';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router';

const Projects = () => {
    const [project, setProject] = useState({});
    const { projectId } = useParams();

    useEffect(() => {
        fetch(`/projects.json/${projectId}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])

    console.log(project);

    return (
        <div>
            <Appbar></Appbar>
            <h1 className="projects">project id: {projectId}</h1>
            <Footer></Footer>
        </div>
    );
};

export default Projects;