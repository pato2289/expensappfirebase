import React from 'react'
import style from './style.scss';

import Boton from '../ui/Boton/boton';

const Login = () => {
    return (
        <>
            <div className={style.loginMenu}>
                <h1 className={style.title}>
                    Iniciar Sesion
                </h1>        
                <form className={style.form}>
                    <div className={style.input}>
                        <label>Dni</label>
                        <input
                            type="number"
                        />
                    </div>
                    <div className={style.input}>
                        <label>Contraseña</label>
                        <input
                            type="password"
                        />
                    </div>
                    <div className={style.botonPosition}>
                        <Boton 
                            href="/inquilino"
                            texto="Iniciar Sesion"
                        />
                    </div>
                </form>
                <div className={style.botonVolver}>
                    <Boton
                        href="/"
                        texto="Volver"
                    />
                </div>
                
            </div>
        </> 
     );
}
 
export default Login;