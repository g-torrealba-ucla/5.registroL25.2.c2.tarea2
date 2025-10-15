import Cl_mEquipo, { iEquipo } from "./Cl_mEquipo.js";
import Cl_mEquipos from "./Cl_mEquipos.js";
import Cl_vEquipo from "./Cl_vEquipo.js";

export default class Cl_controlador {
  public modelo: Cl_mEquipos;
  public vista: Cl_vEquipo;
  constructor(modelo: Cl_mEquipos, vista: Cl_vEquipo) {
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
