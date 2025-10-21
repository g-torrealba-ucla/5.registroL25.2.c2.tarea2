import Cl_mActividad from "./Cl_mActividad.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    nuevaActividad({ actividad, callback, }) {
        this.modelo.add({
            actividad,
            callback,
        });
    }
    actividadId(id) {
        return this.modelo.actividadId(id) || new Cl_mActividad();
    }
    infoActividades() {
        let actividades = [];
        this.modelo.actividades.map((actividad) => actividades.push(actividad.toJSON()));
        return actividades;
    }
}
