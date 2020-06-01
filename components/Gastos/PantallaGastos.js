import React from 'react'
import style from './style.scss';

import Boton from '../ui/Boton/boton';

const PantallaGastos = () => {
    return ( 
        <>
            <div className={style.menu}>
                <h1 className={style.title}>
                    Gastos
                </h1>
                <div className={style.form}>
                    <div className={style.table}>
                        <h1>Fecha</h1>
                        <h1>Descripcion</h1>
                        <h1>Importe</h1>
                    </div>
                </div>
                <div className={style.botonVolver}>
                    <Boton
                        href="/inquilino"
                        texto="Volver"
                    />
                </div> 
            </div>
        </>
     );
}
 
export default PantallaGastos;