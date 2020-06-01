import React from 'react'
import style from './style.scss';

import Boton from '../../ui/Boton/boton';

const PagoExpensas = () => {
    return ( 
        <>
            <div className={style.menu}>
                <h1 className={style.title}>
                    Pagar Expensas
                </h1>
                <div className={style.form}>
                    <div className={style.table}>
                        <h1>Mes</h1>
                        <h1>Importe</h1>
                        <h1>Fecha</h1>
                    </div>
                    <div className={style.table}>
                        <h2>03/2020</h2>
                        <h2>$2000</h2>
                        <h2>01/01/2020</h2>
                    </div>
                    <div className={style.botonPagar}>
                        <Boton
                            href="/pagoconfirmado"
                            texto="Pagar"
                        />
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
 
export default PagoExpensas;