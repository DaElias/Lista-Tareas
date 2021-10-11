import React from 'react';
import { useAuth } from '../contextos/AuthContex';
import { useHistory } from 'react-router';
import { Route, Redirect } from 'react-router';


const RutaPrivada = ({ children, ...restoPorpiedades }) => {
    const { usuario } = useAuth();
    //console.log(usuario);
    //console.log(restoPorpiedades)
    if (usuario) {
        return <Route {...restoPorpiedades}>{children}</Route>;
    } else {
        return <Redirect to="/iniciar-sesion"/>;
    }
  
}

export default RutaPrivada;
