import React from 'react';
import { Header, Titulo } from "../Elementos/Header";
import { Helmet } from 'react-helmet';
import BtnRegresar from '../Elementos/BtnRegresar';
import BarraTotalGastos from './BarraTotalGastos';
import useObetenerGastos from '../hooks/useObetenerGastos';
import {
    Lista,
    ElementoLista,
    ListaDeCategorias,
    ElementoListaCategorias,
    Categoria,
    Descripcion,
    Valor,
    Fecha,
    ContenedorBotones,
    BotonAccion,
    BotonCargarMas,
    ContenedorBotonCentral,
    ContenedorSubtitulo,
    Subtitulo
} from '../Elementos/ElementosLista';
import IconosCategoria from '../Elementos/IconosCategoria';
//import { AuthContext } from '../contextos/AuthContex';
import { useAuth } from '../contextos/AuthContex';
import convertirMoneda from '../funciones/convertirMoneda';
import { ReactComponent as IconoEditar } from './../imagenes/editar.svg';
import { ReactComponent as IconoBorrar } from './../imagenes/borrar.svg';
import { Link } from 'react-router-dom';
import Boton from '../Elementos/Botones';


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
            <Lista>
                {gastos.map((gasto) => {
                    return (
                        <ElementoLista key={gasto.id}>
                            <Categoria>
                                <IconosCategoria id={gasto.data.categoria} />
                                {gasto.data.categoria}
                            </Categoria>
                            <Descripcion>
                                {gasto.data.descripcion}
                            </Descripcion>
                            <Valor>{convertirMoneda(gasto.data.cantidad)}</Valor>
                            <ContenedorBotones>
                                <BotonAccion as={Link} to={`/editar-gasto/${gasto.id}`}><IconoEditar /></BotonAccion>
                                <BotonAccion><IconoBorrar /></BotonAccion>
                            </ContenedorBotones>
                        </ElementoLista>
                    );
                })}
                {gastos.length===0&&
                <ContenedorSubtitulo>
                    <Subtitulo>No hay gastos!!</Subtitulo>
                    <Boton as={Link} to="/">Agregar gasto</Boton>
                </ContenedorSubtitulo>
                }

                {/* 
                   <ContenedorBotonCentral>
                    <BotonCargarMas>Cargar mas!!</BotonCargarMas>
                </ContenedorBotonCentral>
                */}
            </Lista>
            <BarraTotalGastos />
        </>
    )
}

export default ListaGastos;
