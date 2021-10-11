import React, { useState, useContext, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from '../firebase/firebaseConfig';
//Creamos el esta global
const AuthContext = React.createContext();
//hook para acceder al contextos
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState();
    const [cargando, setCargando] = useState(true)
    const auth = getAuth();
    //efecto para comprobar si el usuario esta log

    useEffect(() => {
        //comprobamos si hay usuario
        const cancelarApp = onAuthStateChanged(auth, (user) => {
            setUsuario(user);
            setCargando(false)
            /*
            if(user){
                const uid= user.uid;
                console.log(user);
            }
 */
        });
        return cancelarApp;
    },[]);

    //con el cargando primero comprobamos el usuario y despues mostramos la pag
    return (
        <AuthContext.Provider value={{ usuario: usuario }}>
            {!cargando && children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth };
