import React from "react";
import { Helmet } from 'react-helmet';
import Boton from "./Elementos/Botones";
import { Header, Titulo, ContenedorBotones, ContenedorHeader } from './Elementos/Header';
function App() {
  return (
    <>
      <Helmet>
        <title>Agregar Gastos</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categorias</Boton>
            <Boton to="/lista">Listas</Boton>
            <Boton to="/">x</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
}

export default App;
