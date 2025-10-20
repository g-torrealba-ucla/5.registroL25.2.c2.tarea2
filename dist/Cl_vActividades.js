import Cl_mActividad from "./Cl_mActividad.js";
import Cl_vGeneral, { tHTMLElement } from "./Cl_vGeneral.js";
export default class Cl_vActividades extends Cl_vGeneral {
    constructor() {
        var _a;
        super({ formName: "infoActividadForm" });
        this.selActividad = this.crearHTMLSelectElement("selActividad", {
            elements: (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.infoActividades(),
            valueAttributeName: "id",
            textAttributeName: "nombre",
            onchange: () => {
                this.actividad.nombre = this.selActividad.value;
                this.refresh();
            },
        });
        this.lblNombre = this.crearHTMLElement("lblNombre", {
            type: tHTMLElement.LABEL,
            refresh: () => (this.lblNombre.innerHTML = this.actividad.nombre),
        });
        this.lblFecha = this.crearHTMLElement("lblFecha", {
            type: tHTMLElement.LABEL,
            refresh: () => (this.lblFecha.innerHTML = this.actividad.fecha),
        });
        this.lblDescripcion = this.crearHTMLElement("lblDescripcion", {
            type: tHTMLElement.LABEL,
            refresh: () => (this.lblDescripcion.innerHTML = this.actividad.descripcion),
        });
        this.lblEstado = this.crearHTMLElement("lblEstado", {
            type: tHTMLElement.LABEL,
            refresh: () => (this.lblEstado.innerHTML = this.actividad.estado),
        });
        this.lblCntParticipantes = this.crearHTMLElement("lblCntParticipantes", {
            type: tHTMLElement.LABEL,
            refresh: () => (this.lblCntParticipantes.innerHTML = "0"),
        });
        this.btNueva = this.crearHTMLButtonElement("btNueva", {
            onclick: () => {
                var _a;
                let nombre, fecha, descripcion;
                nombre = prompt("Ingrese el nombre de la actividad");
                if (nombre)
                    fecha = prompt("Ingrese la fecha (aaaa-mm-dd)");
                if (nombre && fecha)
                    descripcion = prompt("Ingrese la descripcion");
                if (!nombre || !fecha || !descripcion)
                    return;
                let actividad = new Cl_mActividad({ nombre, fecha, descripcion });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.nuevaActividad({
                    actividad: {
                        nombre: actividad.nombre,
                        fecha: actividad.fecha,
                        descripcion: actividad.descripcion,
                    },
                    callback: (error) => {
                        if (error)
                            alert(error);
                        else
                            alert("Se registró la actividad");
                        this.refresh();
                    },
                });
            },
        });
        this.actividad = new Cl_mActividad();
        this.refresh();
    }
}
