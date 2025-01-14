import { useEffect, useState } from "react";
import { getMapasPrivados } from "../servicios/getMapasPrivados";

const useMisMapas = () => {

    // Estado con la lista de Mapas que recuperamos de la REST API
    const [listaMapasPriv, setListaMapasPriv] = useState([]);
    const [loadingPriv, setLoadingPriv] = useState(true)

    function obtenerMapas() {

        setLoadingPriv(true)
        // Usamos el servicio de obtención de posts que hemos creado
        getMapasPrivados().then(nextMapas => {

            //Cargamos los Mapas en el estado del componente
            setListaMapasPriv(nextMapas);
            setLoadingPriv(false)


        });
    }

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerMapas, []);

    return { listaMapasPriv, loadingPriv }
}
export default useMisMapas;