import { ReactComponent as IconoCerrarSession } from "./../imagenes/log-out.svg";
import Boton from "./Botones";
import { getAuth, signOut } from '../firebase/firebaseConfig';
import { useHistory } from "react-router";

const BotonCerrarSession = () => {
    const historia = useHistory();

    const handleSingOut = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            historia.push("/iniciar-sesion");
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <Boton iconoGrande as="button" onClick={handleSingOut}>
                <IconoCerrarSession />
            </Boton>
        </div>
    )
}

export default BotonCerrarSession;
