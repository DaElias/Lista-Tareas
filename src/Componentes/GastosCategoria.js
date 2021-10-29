import React from 'react';
import { Header, Titulo } from "../Elementos/Header";
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import BarraTotalGastos from './BarraTotalGastos';
const GastosCategoria = () => {
    return <>
        <Helmet>
            <title>Gastos Categorias</title>
        </Helmet>
        <Header>
                <BtnRegresar />
                <Titulo>Gastos por Categoria</Titulo>
        </Header>
        <BarraTotalGastos/>
    </>
}

export default GastosCategoria;
