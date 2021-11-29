import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Project = (props) => {

    // destructuring
    const { name, type, image } = props.project || {}

    return (
        <div className="col-md-3 mt-5 mx-auto">
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>{type}</p>
                        </Card.Text>
                        <Button variant="dark">visit</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Project;