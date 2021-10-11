import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Boton from './../Elementos/Botones';
import { Header, Titulo, ContenedorHeader } from './../Elementos/Header';
import { ContenedorBoton, Input, Formulario } from './../Elementos/ElementosForm';
import { ReactComponent as SvgLogin } from './../imagenes/registro.svg';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import Alerta from '../Elementos/Alerta';
//* importamos firebase web v9
import { getAuth, createUserWithEmailAndPassword } from './../firebase/firebaseConfig';


const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; //100px
    margin-bottom: 1.25rem; //20px
`;
const RegisterLogin = () => {
    const history = useHistory();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    //* Alertas
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});

    const HandleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setCorreo(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'password2':
                setPassword2(e.target.value);
                break;
            default:
                break;
        }
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        setEstadoAlerta(false);
        setAlerta({});
        //* Validamos el correo y contraseña
        const passwordTest = password2 === password ? true : false;
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        const correoTest = expresionRegular.test(correo);
        //validar expresion regular
        //console.log(expresionRegular.test(correo));
        if (correoTest && passwordTest && password !== "") {
            try {
                //code here create user firebase auth
                //* crear un usuario
                const auth = getAuth();
                await createUserWithEmailAndPassword(auth, correo, password);
                /*
                .then(() => {
                     console.log("bien");
                 }).catch((e) => {
                     console.log(e);
                 });
                  */
                /*   setCorreo("");
                  setPassword("");
                  setPassword2(""); */

                history.push('/')
            }
            catch (error) {
                setEstadoAlerta(true);
                let mensaje = "";
                switch (error.code) {
                    case 'auth/weak-password':
                        mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
                        break;
                    case 'auth/email-already-in-use':
                        mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                        break;
                    case 'auth/invalid-email':
                        mensaje = 'El correo electrónico no es válido.'
                        break;
                    default:
                        mensaje = 'Hubo un error al intentar crear la cuenta.'
                        break;
                }
                setAlerta({
                    tipo: "error",
                    mensaje: mensaje
                });
            }
        } else {

            if (!correoTest) {
                setEstadoAlerta(true);

                /* console.log("Correo error");*/
                setAlerta({
                    tipo: "error",
                    mensaje: "Ingrese un correo electronico valido!!"
                });
                return;
            }
            //console.log(correoTest);
            if (!passwordTest) {
                setEstadoAlerta(true);
                setAlerta({
                    tipo: "error",
                    mensaje: "La contraseñas no son iguales error!!"
                });
                return;
            }
            if (password === "") {
                setEstadoAlerta(true);
                setAlerta({
                    tipo: "error",
                    mensaje: "Hay espacios vacios!!"
                });
                return;
            }


        }
    }
    return (
        <>
            <Helmet>
                <title>Crear Cuenta</title>
            </Helmet>
            <Header>
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>
                    <div>
                        <Boton to="/iniciar-sesion">Iniciar Secion</Boton>
                    </div>
                </ContenedorHeader>
            </Header>
            <Formulario >
                <Svg />
                <Input
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    value={correo}
                    onChange={(e) => HandleChange(e)}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => HandleChange(e)}
                />
                <Input
                    type="password"
                    name="password2"
                    placeholder="Repetir la Contraseña"
                    value={password2}
                    onChange={(e) => HandleChange(e)}
                />
                <ContenedorBoton>
                    <Boton
                        onClick={HandleSubmit}
                        us="button"
                        primario
                        type="submit"
                    >Crear Cuenta</Boton>
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

export default RegisterLogin;
