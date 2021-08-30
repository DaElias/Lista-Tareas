import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './Elementos/Contenedor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
//* *Components 
import Login from './Componentes/Login';
import RegisterLogin from './Componentes/RegisterLogin';
import ListaGastos from './Componentes/ListaGastos';
import GastosCategoria from './Componentes/GastosCategoria';
import EditarGasto from './Componentes/EditarGasto';
//* importamos el icono
import favicon from "./imagenes/logo.png";
//* importamos el fondo
import Fondos from './Elementos/Fondos';
//* Texto recuprado de: https://fonts.google.com/specimen/Inconsolata
WebFont.load({
  google: {
    families: ['Inconsolata', 'monospace']
  }
});

const Index = () => {

  return <>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      <title>App de Gastos</title>
    </Helmet>
    <BrowserRouter>
      <Contenedor>
        <Switch>
          <Route path="/iniciar-sesion" component={Login} />
          <Route path="/crear-cuenta" component={RegisterLogin} />
          <Route path="/categorias" component={GastosCategoria} />
          <Route path="/lista" component={ListaGastos} />
          <Route path="/editar-gasto/:id" component={EditarGasto} />
          <Route path="/" component={App} />
        </Switch>
      </Contenedor>
    </BrowserRouter>
    <Fondos/> 
  </>
}


ReactDOM.render(<Index />, document.getElementById('root'));


