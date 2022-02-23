import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import CartWidget from "./CartWidget";
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className="nav">
            <Logo />
            <Nav />
            <CartWidget />
        </nav>
    );
};

export default NavBar;