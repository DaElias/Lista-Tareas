import React, { useState } from 'react';
import { ContenedorBoton, Input, InputGrande, Formulario, ContenedorFiltros } from '../Elementos/ElementosForm';
import Boton from '../Elementos/Botones';
import { ReactComponent as IconoPlus } from '../imagenes/plus.svg';
import SelectCategorias from './SelectCategorias';
//*firebase
//import { AgregarGastos } from '../firebase/AgregarGastos';
import { db, addDoc, collection } from '../firebase/firebaseConfig';
//import { db,setDoc,doc,addDoc,collection } from '../firebase/firebaseConfig';
//*hora
import DatePicker from './DatePicker';
import getUnixTime from 'date-fns/getUnixTime';
//import fromUnixTime from 'date-fns/fromUnixTime';
//*Alerta
import Alerta from '../Elementos/Alerta';
import { useAuth } from '../contextos/AuthContex';
//import { setLogLevel } from '@firebase/app';
import convertirMoneda from '../funciones/convertirMoneda';

const FormularioGasto = () => {
    const [inputDescription, setInputDescription] = useState('');
    const [inputCatidad, setInputCatidad] = useState('');
    //const [inputCatidadM, setInputCatidadM] = useState('');

    const [categoria, setCategoria] = useState('hogar');
    const [fecha, setFecha] = useState(new Date());
    const usuario = useAuth().usuario; //no pregunten xD
    //agregar alerta
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});
    

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'descripcion':
                setInputDescription(e.target.value);
                break;
            case 'valor':
                let dato = e.target.value;
                //expresionRegular todo lo que sea numero remplazarlo por ''
               //console.log(convertirMoneda(dato.replace(/[^0-9.]/g, '')));
                //setInputCatidadM(convertirMoneda(dato.replace(/[^0-9.]/g, '')));
                setInputCatidad(dato.replace(/[^0-9.]/g, ''));
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log(inputDescription,' ',inputCatidad,' ',categoria,' ',fecha);
        /*
        //cuando estaba agregar gastos "componente"
         AgregarGastos({
             categoria: categoria,
             descripcion: inputDescription,
             cantidad: inputCatidad,
             fecha: fecha
         });
        */
        //* * Se realiza el envio de los datos al servidor de firebase
        
        if (inputCatidad !== "" && inputDescription !== ""&&typeof(parseFloat(inputCatidad))==='number') {
            agregarGastosEnviar();
        } else {
            setEstadoAlerta(false);
            setAlerta({});
            setEstadoAlerta(true);
            setAlerta({
                tipo: "error",
                mensaje: "ingrese valores!!"
            });
        }


    }
    const agregarGastosEnviar = async () => {
        setEstadoAlerta(false);
        setAlerta({});
        const infoAlerta = { tipo: "", texto: "" }
        try {
            const cantidad= parseFloat(inputCatidad).toFixed(2);
            //usuario.uid
            const refDoc = await addDoc(collection(db, "DatosGastos"), { //se guardan todos los datos en DatosGastos
                categoria: categoria,
                descripcion: inputDescription,
                cantidad: cantidad,
                fecha: getUnixTime(fecha),
                uid: usuario.uid
            });
            /*
            const refDoc = await addDoc(collection(db, usuario.uid), { //se guardan todos los datos en colecciones por usuario
                categoria: categoria,
                descripcion: inputDescription,
                cantidad: cantidad,
                fecha: getUnixTime(fecha),
                uid: usuario.uid
            });
           
           */
            /*
              await setDoc(doc(db,"DatosGasto"),{
                  categoria:categoria,
                  descripcion:descripcion,
                  cantidad:cantidad,
                  fecha:fecha
              });
            */
            infoAlerta.tipo = "exito";
            infoAlerta.texto = "Se envio Exitosamente!!";
            //reinicio los datos
            setInputCatidad('');
            setInputDescription('');
            setCategoria('hogar');
            setFecha(new Date());
        } catch (e) {
            console.log('Error\n', e);
            infoAlerta.tipo = "error";
            infoAlerta.texto = "Error en el envio!!";
        }
        //se efectua la notificacion!!
        setEstadoAlerta(true);
        setAlerta({
            tipo: infoAlerta.tipo,
            mensaje: infoAlerta.texto
        });
    }


    return (
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategorias categoria={categoria} setCategoria={setCategoria} />
                <DatePicker fecha={fecha} setFecha={setFecha} />
            </ContenedorFiltros>

            <div>
                <Input
                    type="text"
                    name="descripcion"
                    placeholder="Descripcion del gasto"
                    value={inputDescription}
                    onChange={handleChange}
                ></Input>
                <InputGrande
                    type="text"
                    name="valor"
                    placeholder="$0.00"
                    value={inputCatidad}
                    onChange={handleChange}
                ></InputGrande>
            </div>
            <ContenedorBoton>
                <Boton as="button" primario conIcono type="submit">Agregar Gastos!!
                    <IconoPlus />
                </Boton>
            </ContenedorBoton>
            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                setEstadoAlerta={setEstadoAlerta}
            />
        </Formulario>
    )
}

export default FormularioGasto;
