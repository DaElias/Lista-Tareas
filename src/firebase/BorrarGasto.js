import { db, doc, deleteDoc } from './firebaseConfig';

const borrarGasto = async (id, setactualiza) => {

    try {
        setactualiza(true)
        await deleteDoc(doc(db, "DatosGastos", id));
        setactualiza(false);

    } catch (e) {
        console.log(e);
    }
}

export default borrarGasto;
