import { formatearFecha } from "./tools/index.js";
export enum estadoActividad {
  PENDIENTE = "Pendiente",
  EN_CURSO = "En curso",
  TOMA_ASISTENCIA = "Toma asistencia",
  TERMINADA = "Terminada",
  CANCELADA = "Cancelada",
}
export interface iActividad {
  id?: number | null;
  creadoEl?: string | null;
  nombre: string;
  fecha: string;
  descripcion: string;
  estado?: estadoActividad;
}
export default class Cl_mActividad {
  private _id: number | null = null;
  private _creadoEl: string | null = null;
  private _nombre: string = "";
  private _fecha: string = formatearFecha(new Date());
  private _descripcion: string = "";
  private _estado: estadoActividad = estadoActividad.PENDIENTE;
  constructor(
    {
      id,
      creadoEl,
      nombre,
      fecha,
      descripcion,
      estado = estadoActividad.PENDIENTE,
    }: iActividad = {
      id: null,
      creadoEl: null,
      nombre: "",
      fecha: formatearFecha(new Date()),
      descripcion: "",
      estado: estadoActividad.PENDIENTE,
    }
  ) {
    this.id = id;
    this.creadoEl = creadoEl;
    this.nombre = nombre;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.estado = estado;
  }
  set id(id: number | null | undefined) {
    this._id = id ? +id : null;
  }
  get id() {
    return this._id;
  }
  set creadoEl(creadoEl: string | null | undefined) {
    this._creadoEl = creadoEl ?? null;
  }
  get creadoEl() {
    return this._creadoEl;
  }
  set nombre(nombre: string) {
    this._nombre = nombre.trim();
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
  set descripcion(descripcion: string) {
    this._descripcion = descripcion.trim();
  }
  get descripcion(): string {
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
      id: this._id,
      creadoEl: this._creadoEl,
      nombre: this._nombre,
      fecha: this._fecha,
      descripcion: this._descripcion,
      estado: this._estado,
    };
  }
}
