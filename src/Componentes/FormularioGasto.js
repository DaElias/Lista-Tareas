import React, { useState } from 'react';
import { ContenedorBoton, Input, InputGrande, Formulario, ContenedorFiltros } from '../Elementos/ElementosForm';
import Boton from '../Elementos/Botones';
import { ReactComponent as IconoPlus } from '../imagenes/plus.svg';
import SelectCategorias from './SelectCategorias';

const FormularioGasto = () => {
    const [inputDescription, setInputDescription] = useState('');
    const [inputCatidad, setInputCatidad] = useState('');
    const [categoria,setCategoria]=useState('Hogar');


    const handleChange = (e) => {
        switch (e.target.name) {
            case 'descripcion':
                setInputDescription(e.target.value);
                break;
                case 'valor':
                let dato=e.target.value;
                //expresionRegular todo lo que sea numero remplazarlo por ''
                setInputCatidad(dato.replace(/[^0-9.]/g,''));
                break;
        }

    };
    return (
        <Formulario>
            <ContenedorFiltros>
              <SelectCategorias categoria={categoria} setCategoria={setCategoria}/>
                <p>Date picker</p>
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
        </Formulario>
    )
}

export default FormularioGasto;
