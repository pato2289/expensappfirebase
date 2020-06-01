// Aca escribiremos las reglas para validar cuando se crea una cuenta

export default function validarCrearConsorcio(valores) {

    let errores = {};

    // validar nombre de usuario
    if(!valores.direccion) {
        errores.direccion = "La direccion es obligatoria"
    }

    return errores;
}