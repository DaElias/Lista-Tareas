import { db,setDoc,doc,addDoc,collection } from './firebaseConfig';


const AgregarGastos = async({categoria,descripcion,cantidad,fecha}) => {
  
    try{
       const refDoc = await addDoc(collection(db,"DatosGastos"),{
            categoria:categoria,
            descripcion:descripcion,
            cantidad:cantidad,
            fecha:fecha
        });
        //console.log(refDoc);
      /*
        await setDoc(doc(db,"DatosGasto"),{
            categoria:categoria,
            descripcion:descripcion,
            cantidad:cantidad,
            fecha:fecha
        });
      */
    }catch(e){
        console.log('Error\n',e)
    }
}

export { AgregarGastos };
