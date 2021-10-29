import React from 'react';
import { Header, Titulo } from "../Elementos/Header";
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import BarraTotalGastos from './BarraTotalGastos';
import useObetenerGastos from '../hooks/useObetenerGastos';
//import { AuthContext } from '../contextos/AuthContex';
import { useAuth } from '../contextos/AuthContex';
const ListaGastos = () => {
    const contexto = useAuth();
    const gastos = useObetenerGastos();
    

    return (
        <>
            <Helmet>
                <title>Lista Gastos</title>
            </Helmet>
            <Header>
                <BtnRegresar />
                <Titulo>LISTA DE GASTOS</Titulo>
            </Header>
            <BarraTotalGastos />
        </>
    )
}

export default ListaGastos;
