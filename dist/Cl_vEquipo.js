import dtEquipos from "./_dtEquipos.js";
import dtProyectos from "./_dtProyectos.js";
import Cl_mEquipo from "./Cl_mEquipo.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vEquipo extends Cl_vGeneral {
    constructor() {
        super({ formName: "equipoForm" });
        this.selNombre = this.crearHTMLSelectElement("selNombre", {
            elements: dtEquipos,
            onchange: () => {
                this.equipo.nombre = this.selNombre.value;
                this.refresh();
            },
            refresh: () => (this.selNombre.style.borderColor = this.equipo.nombre
                ? "aqua"
                : "red"),
        });
        this.inLider = this.crearHTMLInputElement("inLider", {
            refresh: () => (this.inLider.style.borderColor = this.equipo.lider ? "aqua" : "red"),
            onchange: () => {
                this.equipo.lider = this.lider;
                this.refresh();
            },
        });
        this.inCedula2 = this.crearHTMLInputElement("inCedula2", {
            refresh: () => (this.inCedula2.style.borderColor = this.equipo.cedula2
                ? "aqua"
                : "red"),
            onchange: () => {
                this.equipo.cedula2 = this.cedula2;
                this.refresh();
            },
        });
        this.inCedula3 = this.crearHTMLInputElement("inCedula3", {
            refresh: () => (this.inCedula3.style.borderColor = this.equipo.cedula3
                ? "aqua"
                : "red"),
            onchange: () => {
                this.equipo.cedula3 = this.cedula3;
                this.refresh();
            },
        });
        this.inCedula4 = this.crearHTMLInputElement("inCedula4", {
            refresh: () => (this.inCedula4.style.borderColor = this.equipo.cedula4
                ? "aqua"
                : "red"),
            onchange: () => {
                this.equipo.cedula4 = this.cedula4;
                this.refresh();
            },
        });
        this.inCedula5 = this.crearHTMLInputElement("inCedula5", {
            refresh: () => (this.inCedula5.style.borderColor = this.equipo.cedula5
                ? "aqua"
                : "red"),
            onchange: () => {
                this.equipo.cedula5 = this.cedula5;
                this.refresh();
            },
        });
        this.selProyectoA = this.crearHTMLSelectElement("selProyectoA", {
            elements: dtProyectos,
            onchange: () => {
                this.equipo.proyectoA = this.selProyectoA.value;
                this.refresh();
            },
            refresh: () => (this.selProyectoA.style.borderColor = this.equipo.proyectoA
                ? "aqua"
                : "red"),
        });
        this.selProyectoB = this.crearHTMLSelectElement("selProyectoB", {
            elements: dtProyectos,
            onchange: () => {
                this.equipo.proyectoB = this.selProyectoB.value;
                this.refresh();
            },
            refresh: () => (this.selProyectoB.style.borderColor = this.equipo.proyectoB
                ? "aqua"
                : "red"),
        });
        this.btRegistrarEquipo = this.crearHTMLButtonElement("btRegistrarEquipo", {
            onclick: () => {
                var _a;
                if (!this.equipo.dataOk())
                    alert("Revise los datos en rojo");
                else
                    (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.registrarEquipo({
                        equipo: {
                            nombre: this.nombre,
                            lider: this.lider,
                            cedula2: this.cedula2,
                            cedula3: this.cedula3,
                            cedula4: this.cedula4,
                            cedula5: this.cedula5,
                            proyectoA: this.proyectoA,
                            proyectoB: this.proyectoB,
                        },
                        callback: (error) => {
                            if (error)
                                alert(error);
                            else {
                                alert("Integrantes registrados");
                                this.selNombre.value = "";
                                this.inLider.value = "";
                                this.inCedula2.value = "";
                                this.inCedula3.value = "";
                                this.inCedula4.value = "";
                                this.inCedula5.value = "";
                                this.selProyectoA.value = "";
                                this.selProyectoB.value = "";
                            }
                            this.equipo = new Cl_mEquipo();
                            this.refresh();
                        },
                    });
            },
        });
        this.btEquipos = this.crearHTMLButtonElement("btEquipos", {
            onclick: () => {
                var _a;
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.infoEquipos(({ error, equipos, }) => {
                    if (error)
                        alert(error);
                    else {
                        let msg = "", i = 1;
                        equipos.map((equipo) => {
                            msg += `${i++}. ${equipo.nombre}: ${equipo.lider}, ${equipo.cedula2}, ${equipo.cedula3}, ${equipo.cedula4}, ${equipo.cedula5}, (${equipo.proyectoA}, ${equipo.proyectoB})\n`;
                        });
                        alert(msg);
                    }
                });
            },
        });
        this.equipo = new Cl_mEquipo();
        this.refresh();
    }
    get nombre() {
        return this.selNombre.value;
    }
    get lider() {
        return +this.inLider.value;
    }
    get cedula2() {
        return +this.inCedula2.value;
    }
    get cedula3() {
        return +this.inCedula3.value;
    }
    get cedula4() {
        return +this.inCedula4.value;
    }
    get cedula5() {
        return +this.inCedula5.value;
    }
    get proyectoA() {
        return this.selProyectoA.value;
    }
    get proyectoB() {
        return this.selProyectoB.value;
    }
}
