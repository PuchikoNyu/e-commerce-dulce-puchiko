import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className="nav">
            <Logo />
            <Nav />
        </nav>
    );
};

export default NavBar;