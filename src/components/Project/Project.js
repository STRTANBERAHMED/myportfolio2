import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Project = (props) => {
    const { _id, name, picture, season, price } = props.Project || {}
    return (
        <div className="col-md-4 item">
            <div className="p-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {season}
                        </Card.Text>
                        <Card.Text>
                            {price}$
                        </Card.Text>
                        <Link to={`/placeOrders/${_id}`}><Button
                            variant="dark">Buy Now</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Project;