import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }        
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // Registrar un nuevo usuario
    async registrar(nombre, apellido, dni, email, password, consorcio, pisodpto) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);
        console.log(nuevoUsuario);

        return await nuevoUsuario.user.updateProfile({
            displayName : nombre
        })
    }

}
const firebase = new Firebase();
export default firebase;
