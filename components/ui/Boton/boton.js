import React from 'react';
import style from './style.scss';
import Link from 'next/link';


const Boton = props => {
    return ( 
        <>
            <Link href={props.href}>
                <button className={style.button}>
                    <div className={style.textButton}>
                    {props.texto}
                    </div>
                </button>
            </Link>
                
        </>
     );
}

export default Boton;
