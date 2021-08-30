import React from 'react';
import { Header, Titulo } from "../Elementos/Header";
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';

const GastosCategoria = () => {
    return <>
        <Helmet>
            <title>Gastos Categorias</title>
        </Helmet>
        <Header>
                <BtnRegresar />
                <Titulo>Gastos por Categoria</Titulo>
        </Header>
    </>
}

export default GastosCategoria;
