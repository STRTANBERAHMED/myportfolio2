import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer p-5 text-white">
            <h1>Contact Info</h1>
            <div className="d-flex justify-content-center mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Current Address</h3>
                        <p>Baris Mahalle, Safranbolu, Karabuk, Turkey</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Parmanent Address</h3>
                        <p>Nandail, Mymensingh, Bnagladesh</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Phone</h3>
                        <p>+905527316001</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Email</h3>
                        <p>md.tanber4433@gmail.com</p>
                    </div>
                </div>
            </div>
            <p>©2021. Md Tanber portfolio. All rights reserved.</p>
        </div>
    );
};

export default Footer;