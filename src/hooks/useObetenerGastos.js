import { useState, useEffect } from 'react';
import { db, getDocs, collection } from '../firebase/firebaseConfig';
import { useAuth } from '../contextos/AuthContex';
import { doc, where } from '@firebase/firestore';
const useObetenerGastos = () => {
    const [gastos, setGastos] = useState([])
    const usuario = useAuth();
    useEffect(async () => {
        const uidUsuario = usuario.usuario.uid;
        const querySnapshot = await getDocs(collection(db, "DatosGastos"));
        //console.log(querySnapshot.empty);
        //console.log(querySnapshot.size);
        const arraynew =[];
        querySnapshot.docs.forEach((i) => {
            arraynew.push(i.data());
        });
        //console.log(arraynew);
        setGastos(arraynew);


    }, []);
    return [gastos];
}

export default useObetenerGastos;
