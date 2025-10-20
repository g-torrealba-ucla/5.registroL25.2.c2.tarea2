import Cl_mEquipo, { iEquipo } from "./Cl_mActividad.js";
import Cl_mActividades from "./Cl_mActividades.js";
import Cl_vActividades from "./Cl_vActividades.js";

export default class Cl_controlador {
  public modelo: Cl_mActividades;
  public vista: Cl_vActividades;
  constructor(modelo: Cl_mActividades, vista: Cl_vActividades) {
    this.modelo = modelo;
    this.vista = vista;
  }
  registrarEquipo({
    equipo,
    callback,
  }: {
    equipo: iEquipo;
    callback: Function;
  }): void {
    this.modelo.registrarEquipo({
      equipo,
      callback,
    });
  }
  infoEquipos(callback: Function) {
    this.modelo.infoEquipos((error: string | false, equipos: iEquipo[]) => {
      callback({ error, equipos });
    });
  }
}
