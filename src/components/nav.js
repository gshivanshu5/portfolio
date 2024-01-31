import React, { useState } from 'react'
// import { FaBars, FaReact } from 'react-icons/fa';
import { Link } from "react-router-dom";
// import { HiX } from 'react-icons/hi';
import imgg from './logo.png'
import './nav.scss';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <img src={imgg} alt="" />
                </div>
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul >
                        <li>
                            <Link to="/portfolio" onClick={() => setShowMediaIcons(!showMediaIcons)}>HOME</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => setShowMediaIcons(!showMediaIcons)}>ABOUT</Link>
                        </li>   
                        <li>
                            <Link to="/skills" onClick={() => setShowMediaIcons(!showMediaIcons)}>SKILLS</Link>
                        </li>
                        <li>
                            <Link to="/project" onClick={() => setShowMediaIcons(!showMediaIcons)}>PROJECT</Link>
                        </li>
                        <li>
                            <Link to="/resume" onClick={() => setShowMediaIcons(!showMediaIcons)}>EDUCATION</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setShowMediaIcons(!showMediaIcons)}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}