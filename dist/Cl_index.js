import Cl_controlador from "./Cl_controlador.js";
import Cl_mActividades from "./Cl_mActividades.js";
import Cl_vActividades from "./Cl_vActividades.js";
export default class Cl_index {
    constructor() {
        let vista = new Cl_vActividades();
        let modelo = new Cl_mActividades();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}
