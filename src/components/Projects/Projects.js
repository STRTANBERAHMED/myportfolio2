import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className="m-5">
            <div className="text-center">
                <h1>Projects</h1>
            </div>
            <div className="row w-100 p-5 text-center">
                {
                    projects.map(project => <Project
                        key={Project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;