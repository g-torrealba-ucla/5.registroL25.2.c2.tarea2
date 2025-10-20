import { formatearFecha } from "./tools/index.js";
export var estadoActividad;
(function (estadoActividad) {
    estadoActividad["PENDIENTE"] = "Pendiente";
    estadoActividad["EN_CURSO"] = "En curso";
    estadoActividad["TOMA_ASISTENCIA"] = "Toma asistencia";
    estadoActividad["TERMINADA"] = "Terminada";
    estadoActividad["CANCELADA"] = "Cancelada";
})(estadoActividad || (estadoActividad = {}));
export default class Cl_mActividad {
    constructor({ id, creadoEl, nombre, fecha, descripcion, estado = estadoActividad.PENDIENTE, } = {
        id: null,
        creadoEl: null,
        nombre: "",
        fecha: formatearFecha(new Date()),
        descripcion: "",
        estado: estadoActividad.PENDIENTE,
    }) {
        this._id = null;
        this._creadoEl = null;
        this._nombre = "";
        this._fecha = formatearFecha(new Date());
        this._descripcion = "";
        this._estado = estadoActividad.PENDIENTE;
        this.nombre = nombre;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.estado = estado;
    }
    set id(id) {
        this._id = id ? +id : null;
    }
    get id() {
        return this._id;
    }
    set creadoEl(creadoEl) {
        this._creadoEl = creadoEl;
    }
    get creadoEl() {
        return this._creadoEl;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim();
    }
    get nombre() {
        return this._nombre;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    get fecha() {
        return this._fecha;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion.trim();
    }
    get descripcion() {
        return this._descripcion;
    }
    set estado(estado) {
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
