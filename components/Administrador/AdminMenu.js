import React from 'react'
import style from './style.scss';

import Boton from '../ui/Boton/boton';


const AdminMenu = () => {
    return (
        <>
            <div className={style.adminMenu}>
                <h1 className={style.title}>Administrador</h1>        
                <div className={style.botonera}>
                    <Boton 
                        href="/administrador/consorcios"
                        texto="Consorcios"
                    />
                    <Boton 
                        href="/administrador/gastos"
                        texto="Gastos"
                    />
                    <Boton 
                        href="/administrador/solicitudes"
                        texto="Solicitudes"
                    />
                </div>
                <div className={style.botonVolver}>
                <Boton 
                        href="/"
                        texto="Cerrar Sesion"
                    />
                </div>
            </div>
        </> 
     );
}
 
export default AdminMenu;