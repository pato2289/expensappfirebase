import React, { useState, useEffect } from 'react';

const useValidacion = (stateInicial, validar, fn) => {

    //llamamos al stateInicial desde el otro componente
    const [valores, guardarValores] = useState(stateInicial);
    //guarda los errores
    const [errores, guardarErrores] = useState({});
    //va a esperar a que el usuario de click en submit para ejecutar
    const [submitForm, guardarSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm){
            //si es igual a 0, no hubo errores...si no hay errores, ejecuta la funcion
            const noErrores = Object.keys(errores).length === 0;

            if(noErrores) {
                fn(); // FN = funcion que se ejecuta en el componente
            }
            guardarSubmitForm(false);
        }
    }, [errores]);

    // Funcion que se ejecuta conforme el usuario escribe algo
    // va guardando los valores donde le fuimos diciendo, previamente
    // tomando una copia con ...valores
    const handleChange = e => {
        guardarValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }

    // Funcion que se ejecuta cuando el usuario hace 
    // validar es la funcion que le vamos a pasar al hook cuando lo estemos usando
    // valores son los que usa el usuario
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion)
        guardarSubmitForm(true);
    }

    // cuando se realiza el evento de blur (el usuario esta escribiendo y sale)
    const handleBlur = () => {
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
    }

    
    //el return va con llaves porque vamos a devolver varias partes

    return {
        valores,
        errores,
        handleSubmit,
        handleChange,
        handleBlur
    }
}
 
export default useValidacion;