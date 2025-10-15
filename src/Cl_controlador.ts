import Cl_mEquipo from "./Cl_mEquipo.js";
import Cl_mEquipos, { iIntegrantes } from "./Cl_mEquipos.js";
import Cl_vEquipo from "./Cl_vEquipo.js";

export default class Cl_controlador {
  public modelo: Cl_mEquipos;
  public vista: Cl_vEquipo;
  constructor(modelo: Cl_mEquipos, vista: Cl_vEquipo) {
    this.modelo = modelo;
    this.vista = vista;
  }
  registrarIntegrantes({
    integrantes,
    callback
  }: {
    integrantes: iIntegrantes;
    callback: Function;
  }): void {
    this.modelo.registrarEquipo({
      integrantes,
      callback
    });    
  }
}
