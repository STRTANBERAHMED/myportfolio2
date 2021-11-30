import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
// import img1 from '../../images/img1.png';
// import img2 from '../../images/img2.png';
// import img3 from '../../images/img3.png';

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
                            // onClick={() => handleDetails(_id)}
                            variant="dark">Buy Now</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Project;

{/* <div className="row row-cols-1 row-cols-md-3 g-4 my-2">
            <div className="col">
                <div className="card h-100">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{type}</p>
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
        </div> */}