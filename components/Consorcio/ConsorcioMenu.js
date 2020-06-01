import React from 'react'
import style from './style.scss';

import Boton from '../ui/Boton/boton';
import useInquilinos from '../../hooks/useInquilinos';

const ConsorcioMenu = () => {

    const { inquilinos } = useInquilinos();

    return ( 
        <>
            <div className={style.menu}>
                <h1 className={style.title}>
                    Consorcio
                </h1>
                <div className={style.form}>
                    <div className={style.table}>
                        <h1>Apellido/Nombre</h1>
                        <h1>Piso/Dpto</h1>
                    </div>
                    {inquilinos.map(inquilino => (
                        <div className={style.table}>
                            <h2>{inquilino.apellido}, {inquilino.nombre}</h2>
                            <h2>{inquilino.pisodpto}</h2>
                        </div>
                    ))}
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
 
export default ConsorcioMenu;