import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vEquipo extends Cl_vGeneral {
    constructor() {
        super({ formName: "equipoForm" });
        this.inLider = this.crearHTMLInputElement({ elementName: "inLider" });
        this.btRegistrar.onclick = () => {
            if (!this.controlador)
                throw new Error("No hay controlador");
            this.controlador.registrarIntegrantes({
                integrantes: { cedula1: this.cedula1, cedula2: this.cedula2 },
                callback: (error) => {
                    if (error)
                        alert(error);
                    else
                        alert("Integrantes registrados");
                },
            });
        };
    }
    get lider() {
        return +this.inLider.value;
    }
    get cedula1() {
        return +this.inCedula1.value;
    }
    get cedula2() {
        return +this.inCedula2.value;
    }
}
