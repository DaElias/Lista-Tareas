import { useState, useEffect } from 'react';
import { db, getDocs, collection } from '../firebase/firebaseConfig';
import { useAuth } from '../contextos/AuthContex';

const useObetenerGastos = (actualiza) => {
    const [gastos, setGastos] = useState([])
    const usuario = useAuth();
    
    useEffect(async () => {
        try {
            /*  
            const uidUsuario = usuario.usuario.uid;
                        const querySnapshot = await getDocs(collection(db, "DatosGastos")); //conexion con los datos
                        const arraynew = [];
                        querySnapshot.docs.forEach((i) => {
                            let idElemento = i.id; //obtengo el id del elemento seleccionado
                            let uid = i.data().uid; // obtengo el uid de los datos() para compararlo con uidUsuario
                            if (uid === uidUsuario) arraynew.push({ data: i.data(), id: idElemento })
                            //arraynew.push({ data: i.data(), id: idElemento });
                        });
                        setGastos(arraynew);
                        return arraynew; 
            */

                        //si los datos se envian al una coleccion por usuarios
            const uidUsuario = usuario.usuario.uid;
            const querySnapshot = await getDocs(collection(db, /* uidUsuario*/ "DatosGastos")); //conexion con los datos
            const arraynew = [];
            querySnapshot.docs.forEach((i) => {
                let idElemento = i.id; //obtengo el id del elemento seleccionado
                let uid = i.data().uid; // obtengo el uid de los datos() para compararlo con uidUsuario
                if (uid === uidUsuario) arraynew.push({ data: i.data(), id: idElemento })
                //arraynew.push({ data: i.data(), id: idElemento });
            });
            setGastos(arraynew);


        } catch (e) {
            console.log(e);
        }
    }, [actualiza]);
    return gastos;
}

export default useObetenerGastos;
