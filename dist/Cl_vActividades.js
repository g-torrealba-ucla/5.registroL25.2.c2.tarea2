import Cl_mActividad from "./Cl_mActividad.js";
import Cl_vGeneral, { tHTMLElement } from "./Cl_vGeneral.js";
export default class Cl_vActividades extends Cl_vGeneral {
    constructor() {
        var _a;
        super({ formName: "infoActividadForm" });
        this.actividad = null;
        this.selActividad = this.crearHTMLSelectElement("selActividad", {
            elementsSource: (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.infoActividades(),
            valueAttributeName: "id",
            textExpresion: (actividad) => {
                return `${actividad.fecha}: ${actividad.nombre}`;
            },
            onchange: () => {
                var _a, _b;
                this.actividad =
                    (_b = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.actividadId(this.actividadId)) !== null && _b !== void 0 ? _b : null;
                this.refresh();
            },
        });
        this.lblNombre = this.crearHTMLElement("lblNombre", {
            type: tHTMLElement.LABEL,
            refresh: () => { var _a, _b; return (this.lblNombre.innerHTML = (_b = (_a = this.actividad) === null || _a === void 0 ? void 0 : _a.nombre) !== null && _b !== void 0 ? _b : ""); },
        });
        this.lblFecha = this.crearHTMLElement("lblFecha", {
            type: tHTMLElement.LABEL,
            refresh: () => { var _a, _b; return (this.lblFecha.innerHTML = (_b = (_a = this.actividad) === null || _a === void 0 ? void 0 : _a.fecha) !== null && _b !== void 0 ? _b : ""); },
        });
        this.lblDescripcion = this.crearHTMLElement("lblDescripcion", {
            type: tHTMLElement.LABEL,
            refresh: () => { var _a, _b; return (this.lblDescripcion.innerHTML = (_b = (_a = this.actividad) === null || _a === void 0 ? void 0 : _a.descripcion) !== null && _b !== void 0 ? _b : ""); },
        });
        this.lblEstado = this.crearHTMLElement("lblEstado", {
            type: tHTMLElement.LABEL,
            refresh: () => { var _a, _b; return (this.lblEstado.innerHTML = (_b = (_a = this.actividad) === null || _a === void 0 ? void 0 : _a.estado) !== null && _b !== void 0 ? _b : ""); },
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
        this.actividad = null;
    }
    get actividadId() {
        return +this.selActividad.value;
    }
    refill() {
        var _a, _b, _c, _d, _e, _f;
        let infoActividades = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.infoActividades();
        if (!(infoActividades === null || infoActividades === void 0 ? void 0 : infoActividades.length))
            return;
        this.selActividad.refill(infoActividades);
        if (!this.actividad)
            this.actividad = (_c = (_b = this.controlador) === null || _b === void 0 ? void 0 : _b.actividadId(this.actividadId)) !== null && _c !== void 0 ? _c : null;
        this.selActividad.value = (_f = (_e = (_d = this.actividad) === null || _d === void 0 ? void 0 : _d.id) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : "";
        super.refresh();
    }
}
