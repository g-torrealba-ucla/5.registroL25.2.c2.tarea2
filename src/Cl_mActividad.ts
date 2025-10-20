import { formatearFecha } from "./tools/index.js";
export enum estadoActividad {
  PENDIENTE = "Pendiente",
  EN_CURSO = "En curso",
  TOMA_ASISTENCIA = "Toma asistencia",
  TERMINADA = "Terminada",
  CANCELADA = "Cancelada",
}
export interface iActividad {
  nombre: string;
  fecha: string;
  descripcion: string | false;
  estado: estadoActividad;
}
export default class Cl_mActividad {
  private _nombre: string = "";
  private _fecha: string = formatearFecha(new Date());
  private _descripcion: string | false = "";
  private _estado: estadoActividad = estadoActividad.PENDIENTE;
  constructor(
    { nombre, fecha, descripcion, estado }: iActividad = {
      nombre: "",
      fecha: formatearFecha(new Date()),
      descripcion: "",
      estado: estadoActividad.PENDIENTE,
    }
  ) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.estado = estado;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get nombre() {
    return this._nombre;
  }
  set fecha(fecha: string) {
    this._fecha = fecha;
  }
  get fecha() {
    return this._fecha;
  }
  set descripcion(descripcion: string | false) {
    this._descripcion = descripcion;
  }
  get descripcion(): string | false {
    if (this._descripcion === "") return false;
    return this._descripcion;
  }
  set estado(estado: estadoActividad) {
    this._estado = estado;
  }
  get estado() {
    return this._estado;
  }
  toJSON() {
    return {
      nombre: this._nombre,
      fecha: this._fecha,
      descripcion: this._descripcion,
      estado: this._estado,
    };
  }
}
