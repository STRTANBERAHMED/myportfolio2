import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="container">
                    <div className=" row justify-content-center text-white" data-aos="fade-down"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                        <div className="col-md-4">
                            <div>
                                <h2 className="fs-3 fw-bold  ">MD TANBER</h2>
                                <p >A passionate developer whom you want to have in your team. He is Waiting for your message.</p>
                            </div>
                            <div className="social-link">

                            </div>
                            <div>
                                <p>&#169; Md Tanber All Right Reserved.</p>
                            </div>
                        </div>
                        {/* our services */}
                        <div className=" services text-left col-md-3">

                            <ul>
                                <h5>Current Address</h5>
                                <p>Baris Mahalle, Safranbolu, Karabuk, Turkey</p>
                                <h5>Parmanent Address</h5>
                                <p>Nandail, Mymensingh, Bnagladesh</p>
                            </ul>


                        </div>

                        {/* our services */}
                        <div className=" services text-left col-md-3">

                            <ul>
                                <h5>Services</h5>
                                <li>
                                    <a className='text-white' href="">Front End Development</a>
                                </li>
                                <li>
                                    <a className='text-white' href="">Back End Development</a>
                                </li>
                                <li>
                                    <a className='text-white' href="">Problem Solving</a>
                                </li>
                            </ul>
                        </div>

                        {/* our services */}

                        <div className=" services text-left col-md-2">

                            <ul>
                                <h5 className='socials'>Socials</h5>
                                <a href="https://medium.com/@md.tanber4433"><i className="lg bx bxl-medium-square"></i></a>
                                <a href="https://www.instagram.com/strtanber/"><i className="lg bx bxl-instagram"></i></a>
                                <a href="https://twitter.com/StrTanber"><i className="lg bx bxl-twitter"></i></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;