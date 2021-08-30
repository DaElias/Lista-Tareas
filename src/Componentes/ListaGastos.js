import React from 'react';
import { Header, Titulo } from "../Elementos/Header";
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';

const ListaGastos = () => {
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
