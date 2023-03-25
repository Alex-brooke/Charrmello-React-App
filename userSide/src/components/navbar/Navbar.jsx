import React, { useState } from "react";
import { ExpandMore, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://www.charrmello.com/assets/icons/Logo%20Img.png" alt=""
                    />
                    <Link to="/" className="link">
                        <span>Home</span>
                    </Link>
                    <span>Leaning</span>
                    <Link to="/cinematic" className="link">
                        <span>Filmic</span>
                    </Link>
                    <Link to="/audio-dramas" className="link">
                        <span>Audio Dramas</span>
                    </Link>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <Notifications className="icon" />
                    <img
                        src="https://charrmello.netlify.app/assets/imgs/user_prof_img/cat_blue.jpg" alt=""
                    />
                    <div className="profile">
                        <ExpandMore className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
