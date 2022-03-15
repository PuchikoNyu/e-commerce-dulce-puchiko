import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className='divNav'>
            <NavLink to="/" className='enlace'>Inicio</NavLink>
            <div className="dropdown">
                <button className="dropbtn">Productos
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <NavLink to="category/capilar" className='enlace'>Capilar</NavLink>
                    <NavLink to="category/corporal" className='enlace'>Corporal</NavLink>
                    <NavLink to="category/otros" className='enlace'>Accesorios</NavLink>
                </div>
            </div>
            <a href="#" className='enlace'>Nosotros</a>
            <a href="#" className='enlace'>Contacto</a>
        </nav>
    );
};

export default Nav;