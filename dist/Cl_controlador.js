export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    registrarEquipo({ equipo, callback, }) {
        this.modelo.registrarEquipo({
            equipo,
            callback,
        });
    }
    infoEquipos(callback) {
        this.modelo.infoEquipos((error, equipos) => {
            callback({ error, equipos });
        });
    }
}
