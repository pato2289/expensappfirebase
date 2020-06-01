import React from 'react'
import style from './style.scss';

import Boton from '../../ui/Boton/boton';

const AdminSolicitudes = () => {
    return ( 
        <>
            <div className={style.menu}>
                <h1 className={style.title}>
                    Solitudes de ingreso
                </h1>
                <div className={style.form}>
                    <h2>Aca van las solicitudes para entrar al consorcio</h2>
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
 
export default AdminSolicitudes;