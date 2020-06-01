import React from 'react'
import style from './style.scss';

import Boton from '../../ui/Boton/boton';
import useConsorcios from '../../../hooks/useConsorcios';

const ConsorciosMenu = () => {

    const { consorcios } = useConsorcios();

    console.log(consorcios);

    return ( 
        <>
            <div className={style.menu}>
                <h1 className={style.title}>
                    Consorcios
                </h1>
                <div className={style.botonera}>
                    <Boton 
                        href="/administrador/consorcios/crearconsorcio"
                        texto="Crear Consorcio"
                    />
                    {consorcios.map(consorcio => (
                        <Boton 
                        href="/administrador/consorcios/consorcio"
                        texto={consorcio.direccion}
                    />
                    ))}
                </div>
                <div className={style.botonVolver}>
                    <Boton 
                        href="/administrador"
                        texto="Volver"
                    />
                </div>
            </div>
        </>
     );
}
 
export default ConsorciosMenu;