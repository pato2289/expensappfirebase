import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';

const useInquilinos = () => {

    const [consorcios, guardarConsorcios] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const obtenerConsorcios = () => {
            firebase.db.collection('consorcios').onSnapshot(manejarSnapshot);
        }
        obtenerConsorcios();
    }, []);

    function manejarSnapshot(snapshot) {
        const consorcios = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })

        console.log(consorcios);
        guardarConsorcios(consorcios);
    }

    return {
        consorcios
    }
    
}

export default useInquilinos;
