import React, { useEffect, useState } from 'react';
import './Projects.css';
import Appbar from '../Appbar/Appbar';
import Footer from '../Footer/Footer';
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router';

const Projects = () => {

    const [project, setProject] = useState({});
    const { projectId } = useParams();

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const details = data.find(pd => pd._id == projectId)
                setProject(details)
            })
    }, [projectId])


    return (
        <div>
            <Appbar></Appbar>
            <div>
                <div className="col">
                    <div className="card h-100">
                        <>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="h-25 w-25 d-block w-100"
                                        src={project?.screenshot1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="h-25 w-25 d-block w-100"
                                        src={project?.screenshot2}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="h-25 w-25 d-block w-100"
                                        src={project?.screenshot3}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </>
                        <div className="card-body">
                            <h5 className="card-title">{project?.name}</h5>
                            <p className="card-text">{project?.type}</p>
                            <p className="card-text">{project?.about}</p>
                            <a className="link-button" target="_blank" href={project?.github}>GitHub</a>
                            <a className="link-button" target="_blank" href={project?.liveSite}>Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;