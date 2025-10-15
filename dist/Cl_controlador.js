export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    registrarIntegrantes({ integrantes, callback }) {
        this.modelo.registrarEquipo({
            integrantes,
            callback
        });
    }
}
