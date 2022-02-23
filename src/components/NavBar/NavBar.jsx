import React from "react";
import './NavBar.css';
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
    return(
        <nav className="nav">
            <Logo />
            <Menu />
        </nav>
    );
};

export default NavBar;