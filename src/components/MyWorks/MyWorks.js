import React from 'react';
import './MyWorks.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MyWorks = (props) => {

    // destructuring
    const { _id, name, type, image } = props.myWork || {}

    return (

        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{type}</p>
                    </div>
                    <NavLink to={`/projects/${_id}`}>
                        <Button className="link-button my-4" variant="dark">
                            Details
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;