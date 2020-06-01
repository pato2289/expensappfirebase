import React from 'react';
import style from './style.scss';

import Boton from '../ui/Boton/boton';

const Menu = () => {
    return ( 
        <div className={style.background}>
            <h1 className={style.title}>ExpensApp</h1>
            <div className={style.logo}>Logo</div>
            <div className={style.botonera}>
                <Boton 
                    href="/administrador" 
                    texto="Administrador" 
                />
                <Boton 
                    href="/iniciarsesion" 
                    texto="Iniciar Sesion" 
                />
                <Boton 
                    href="/crearcuenta" 
                    texto="Crear Cuenta" 
                />
            </div>
        </div>
     );
}
 
export default Menu;