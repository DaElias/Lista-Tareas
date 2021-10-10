import React,{useContext} from 'react';
import { Header, Titulo } from "../Elementos/Header";
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
//import { AuthContext } from '../contextos/AuthContex';
import { useAuth } from '../contextos/AuthContex';

const ListaGastos = () => {
    //const contextos = useContext(AuthContext);
    //console.log(contextos);
    const contexto = useAuth();
    console.log(contexto.usuario)
    return (
        <>
            <Helmet>
                <title>Lista Gastos</title>
            </Helmet>
            <Header>
                <BtnRegresar />
                <Titulo>LISTA DE GASTOS</Titulo>
            </Header>
        </>
    )
}

export default ListaGastos;
