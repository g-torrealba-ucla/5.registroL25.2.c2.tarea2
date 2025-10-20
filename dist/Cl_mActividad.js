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
    constructor({ nombre, fecha, descripcion, estado } = {
        nombre: "",
        fecha: formatearFecha(new Date()),
        descripcion: "",
        estado: estadoActividad.PENDIENTE,
    }) {
        this._nombre = "";
        this._fecha = formatearFecha(new Date());
        this._descripcion = "";
        this._estado = estadoActividad.PENDIENTE;
        this.nombre = nombre;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.estado = estado;
    }
    set nombre(nombre) {
        this._nombre = nombre;
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
        this._descripcion = descripcion;
    }
    get descripcion() {
        if (this._descripcion === "")
            return false;
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
            nombre: this._nombre,
            fecha: this._fecha,
            descripcion: this._descripcion,
            estado: this._estado,
        };
    }
}
