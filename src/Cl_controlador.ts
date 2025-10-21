import Cl_mActividad, { iActividad } from "./Cl_mActividad.js";
import Cl_mActividades from "./Cl_mActividades.js";
import Cl_vActividades from "./Cl_vActividades.js";

export default class Cl_controlador {
  public modelo: Cl_mActividades;
  public vista: Cl_vActividades;
  constructor(modelo: Cl_mActividades, vista: Cl_vActividades) {
    this.modelo = modelo;
    this.vista = vista;
  }
  nuevaActividad({
    actividad,
    callback,
  }: {
    actividad: iActividad;
    callback: Function;
  }): void {
    this.modelo.add({
      actividad,
      callback,
    });
  }
  actividadId(id: number): Cl_mActividad {
    return this.modelo.actividadId(id)|| new Cl_mActividad();
  }
  infoActividades(): iActividad[] {
    let actividades: iActividad[] = [];
    this.modelo.actividades.map((actividad) =>
      actividades.push(actividad.toJSON())
    );
    return actividades;
  }
}
