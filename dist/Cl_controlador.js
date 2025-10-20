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
    actividad(index) {
        return this.modelo.actividades[index];
    }
    infoActividades() {
        let actividades = [];
        this.modelo.actividades.map((actividad) => actividades.push(actividad.toJSON()));
        return actividades;
    }
}
