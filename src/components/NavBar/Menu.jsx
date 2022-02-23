import React from 'react';

const Menu = () => {
    return(
        <nav className='divNav'>
            <a href="#" className='enlace'>Inicio</a>
            <div className="dropdown">
                <button className="dropbtn">Productos
                    <i className="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#" className='enlace'>Capilar</a>
                    <a href="#" className='enlace'>Corporal</a>
                    <a href="#" className='enlace'>Accesorios</a>
                </div>
            </div>
            <a href="#" className='enlace'>Nosotros</a>
            <a href="#" className='enlace'>Contacto</a>
        </nav>
    );
};

export default Menu;