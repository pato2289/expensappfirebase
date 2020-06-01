import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';

const useInquilinos = () => {

    const [inquilinos, guardarInquilinos] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const obtenerInquilinos = () => {
            firebase.db.collection('inquilino').onSnapshot(manejarSnapshot);
        }
        obtenerInquilinos();
    }, []);

    function manejarSnapshot(snapshot) {
        const inquilinos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })

        console.log(inquilinos);
        guardarInquilinos(inquilinos);
    }

    return {
        inquilinos
    }
    
}

export default useInquilinos;
