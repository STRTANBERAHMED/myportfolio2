import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services" id="services">
            <div className="heading">
                <h2>Services</h2>
                <span>Our Services</span>
            </div>
            <div className="services-content">
                {/* <!-- Box 1 --> */}
                <div className="services-box">
                    <i className="bx bx-code-alt"></i>
                    <h3>Web <br />development</h3>
                    <a href="#">Learn more</a>
                </div>
                {/* <!-- Box 2 --> */}
                <div className="services-box">
                    <i className="bx bx-server"></i>
                    <h3>Backend <br />development</h3>
                    <a href="#">Learn more</a>
                </div>
                {/* <!-- Box 3 --> */}
                <div className="services-box">
                    <i className="bx bx-cog"></i>
                    <h3>Problem <br />Solving</h3>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    );
};

export default Services;