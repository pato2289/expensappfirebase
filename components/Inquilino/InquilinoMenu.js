import React from 'react'
import style from './style.scss';

import Boton from '../ui/Boton/boton';
import useInquilinos from '../../hooks/useInquilinos';

const InquilinoMenu = () => {

    const { inquilinos } = useInquilinos();

    return (
        <>
            <div className={style.inquilinoMenu}>
                <h1 className={style.title}>Inquilino</h1>        
                <div className={style.botonera}>
                    <Boton 
                        href="/inquilino/miconsorcio"
                        texto="Mi consorcio"
                    />
                    <Boton 
                        href="/inquilino/gastos"
                        texto="Gastos"
                    />
                    <Boton 
                        href="/inquilino/pagarexpensas"
                        texto="Pagar Expensas"
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
 
export default InquilinoMenu;