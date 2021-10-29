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
//importamos los 
import { AuthProvider } from './contextos/AuthContex';
import RutaPrivada from './Componentes/RutaPrivada';

WebFont.load({
  google: {
    families: ['Inconsolata', 'monospace']
  }
});

const Index = () => {
  return <>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <title>App de Gastos</title>
    </Helmet>
    <AuthProvider>
      <BrowserRouter>
        <Contenedor>
          <Switch>
            <Route path="/iniciar-sesion" component={Login} />
            <Route path="/crear-cuenta" component={RegisterLogin} />
            <RutaPrivada path="/categorias">
              <GastosCategoria />
              {/*
              <Route path="/categorias" component={GastosCategoria} />
               */}
            </RutaPrivada>
            <RutaPrivada path="/lista" >
              <ListaGastos />
            </RutaPrivada>
            <RutaPrivada path="/editar-gasto/:id">
              <EditarGasto />
            </RutaPrivada>
            <RutaPrivada path="/">
              <App />
            </RutaPrivada>
          </Switch>
        </Contenedor>
      </BrowserRouter>
    </AuthProvider>
    <Fondos />
  </>
}


ReactDOM.render(<Index />, document.getElementById('root'));


