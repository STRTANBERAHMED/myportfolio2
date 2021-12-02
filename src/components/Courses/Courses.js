import React from 'react';
import './Courses.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Courses = (props) => {

    // destructuring
    const { _id, name, type, image } = props.course || {}

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
            {/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>Course Name: {name}</Card.Title>
                        <Card.Text>
                            <p>price: ${price}</p>
                        </Card.Text>
                        <Button variant="dark">visit</Button>
                    </Card.Body>
                </Card> */}
        </div>
    );
};

export default Courses;