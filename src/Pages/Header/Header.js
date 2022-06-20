import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import Toggle from '../Toggle/Toggle';
import './Header.css';

const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }

    //   const [anchorEl, setAnchorEl] = React.useState(null);

    //   const handleMenu = (event) => {
    //     setAnchorEl(event.currentTarget);
    //   };

    //   const handleClose = () => {
    //     setAnchorEl(null);
    //   };


    return (
        <div className="">
            {/* <div className='header'>
                <a href="#" className="logo">MD TANBER</a>

                <div className="bx bx-menu" id="menu-icon"></div>

                <ul className="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <div className="bx bx-moon" id="darkmode"></div>
                </ul>
            </div> */}
            <nav className='all-items header' data-aos="zoom-out-down" data-aos-duration="1800">
                <div className='logo-img'>
                    <a href="#" className="logo">MD TANBER</a>
                    {/* <Toggle></Toggle> */}
                </div>

                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="navbar">
                        <li className='single-link'><a href="/home">Home</a></li>
                        <li className='single-link'><a href="#about">About</a></li>
                        <li className='single-link'><a href="#skills">Skills</a></li>
                        <li className='single-link'><a href="#services">Services</a></li>
                        <li className='single-link'><a href="#portfolio">Projects</a></li>
                        <li className='single-link'><a href="/contactForm">Contact</a></li>
                        {/* <div className="bx bx-moon" id="darkmode"></div> */}
                    </ul>
                    {/* <Link className='single-link' to='/home'>Home</Link>
                    <Link className='single-link' to='/aboutMe'>About</Link>
                    <Link className='single-link' to='/services'>Services</Link>
                    <Link className='single-link' to='/skills'>Skills</Link>
                    <Link className='single-link' to='/projects'>Projects</Link>
                    <Link className='single-link' to='/blogs'>Blogs</Link>
                    <Link className='single-link' to='/contactForm'>Contact Me</Link> */}
                </div>
                <div onClick={handleClick} className='menu-icon'>
                    <i className={click ? 'bx bxs-message-square-x icon-style' : 'bx bx-menu icon-style'}></i>
                </div>
            </nav>
        </div>
    );
};

export default Header;