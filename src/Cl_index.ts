import Cl_controlador from "./Cl_controlador.js";
import Cl_mEquipos from "./Cl_mEquipos.js";
import Cl_vEquipo from "./Cl_vEquipo.js";

export default class Cl_index {
  constructor() {
    let vista = new Cl_vEquipo();
    let modelo = new Cl_mEquipos();
    let controlador = new Cl_controlador(modelo, vista);
    vista.controlador = controlador;
  }
}
