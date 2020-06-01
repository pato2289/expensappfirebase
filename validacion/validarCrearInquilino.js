// Aca escribiremos las reglas para validar cuando se crea una cuenta

export default function validarCrearInquilino(valores) {

    let errores = {};

    // validar nombre de usuario
    if(!valores.nombre) {
        errores.nombre = "El nombre es obligatorio"
    }

    // Validar mail
    if(!valores.email){
        errores.email = "El email es obligatorio"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
        errores.email = "Email no valido"
    }

    // Validar password
    if(!valores.password) {
        errores.password = "el password es obligatorio"
    } else if(valores.password.length < 6) {
        errores.password = "el password debe tener 6 caracteres"
    }

    return errores;
}