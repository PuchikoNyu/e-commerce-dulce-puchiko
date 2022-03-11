import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import CartWidget from "./CartWidget";
import './NavBar.css';

const NavBar = ({saludo}) => {
    return(
        <>
            <nav className="nav">
                <Logo />
                <Nav />
                <CartWidget />
            </nav>
            <h1>{saludo}</h1>
        </>

    );
};

export default NavBar;