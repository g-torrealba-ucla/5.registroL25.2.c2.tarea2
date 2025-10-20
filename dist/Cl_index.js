import Cl_controlador from "./Cl_controlador.js";
import Cl_mActividades from "./Cl_mActividades.js";
import Cl_vActividades from "./Cl_vActividades.js";
export default class Cl_index {
    constructor() {
        let modelo = new Cl_mActividades((error) => {
            if (error)
                alert(error);
            if (error)
                throw new Error(error);
            let vista = new Cl_vActividades();
            let controlador = new Cl_controlador(modelo, vista);
            vista.controlador = controlador;
        });
    }
}
