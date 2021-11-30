import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';


const MyProjects = () => {
    return (
        <div className="my-5">
            <h1>My Projects</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-2">
                <div className="col">
                    <div className="card h-100">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Str Car World</h5>
                            <p className="card-text">A fully functional full-stack web application</p>
                        </div>
                        <NavLink to='/projects'>
                            <Button className="link-button my-4" variant="dark">
                                Visit
                            </Button>
                        </NavLink>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Islamic Education</h5>
                            <p className="card-text">A fully functional frontend web application</p>
                        </div>
                        <NavLink to='/projects'>
                            <Button className="link-button my-4" variant="dark">
                                Visit
                            </Button>
                        </NavLink>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Medicare</h5>
                            <p className="card-text">A fully functional frontend web application</p>
                        </div>
                        <NavLink to='/projects'>
                            <Button className="link-button my-4" variant="dark">
                                Visit
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;