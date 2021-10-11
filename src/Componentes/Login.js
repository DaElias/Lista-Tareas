import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Boton from './../Elementos/Botones';
import { Header, Titulo, ContenedorHeader } from './../Elementos/Header';
import { ContenedorBoton, Input, Formulario } from './../Elementos/ElementosForm';
import { ReactComponent as SvgLogin } from './../imagenes/login.svg';
import styled from 'styled-components';
import Alerta from '../Elementos/Alerta';
import { useHistory } from 'react-router';
import { signInWithEmailAndPassword, getAuth } from '../firebase/firebaseConfig';
const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem; //100px
    margin-bottom: 1.25rem; //20px
`;

const Login = () => {
    const history = useHistory();
    const [correo, setcorreo] = useState("");
    const [password, setpassword] = useState("");
    //* Alertas
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});

    const handleChange = (e) => {
        switch (e.target.name) {
            case "email":
                setcorreo(e.target.value);
                break;
            case "password":
                setpassword(e.target.value);
                break;
            default:
                break;
        }
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setEstadoAlerta(false);
        setAlerta({});
        //* Validamos el correo y contraseña
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        const correoTest = expresionRegular.test(correo);
        const vaciosTest = correo === "" || password === "" ? false : true;
        if (correoTest && vaciosTest) {
            //code here
            const auth = getAuth();
            try{
                await signInWithEmailAndPassword(auth, correo, password);
                history.push("/");
            }catch(e){
                setEstadoAlerta(true);
                let mensaje;
                if (e.code === "auth/user-not-found") {
                    mensaje = "El correo no existe!!";
                } else if (e.code === "auth/wrong-password") {
                    mensaje = "Contraseña erronea!!";
                }

                setAlerta({
                    tipo: "error",
                    mensaje: mensaje
                }); 
            }
            

          
        } else {
            let mensaje = "";
            setEstadoAlerta(true);
            if (!correoTest) {
                mensaje = "Ingrese un correo electronico valido!!";
            }
            if (!vaciosTest) {
                mensaje = "Hay espacios vacios!!";
            }
            setAlerta({
                tipo: "error",
                mensaje: mensaje
            });
        }
    }
    return (
        <>
            <Helmet>
                <title>Iniciar Sesion</title>
            </Helmet>
            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar Sesion</Titulo>
                    <div>
                        <Boton to="/crear-cuenta">Registrarse</Boton>
                    </div>
                </ContenedorHeader>
            </Header>
            <Formulario >
                <Svg />
                <Input
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    onChange={handleChange}
                    value={correo}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    value={password}
                />
                <ContenedorBoton>
                    <Boton us="button" primario
                        onClick={handleSubmit}
                    >Iniciar Sesion</Boton>
                </ContenedorBoton>
            </Formulario>
            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                setEstadoAlerta={setEstadoAlerta}
            />
        </>
    )
}

export default Login;
