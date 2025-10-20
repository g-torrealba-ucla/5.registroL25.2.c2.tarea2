import Cl_mEquipo, { iEquipo } from "./Cl_mActividad.js";
import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vActividades extends Cl_vGeneral {
  private selNombre: HTMLSelectElement;
  private inLider: HTMLInputElement;
  private inCedula2: HTMLInputElement;
  private inCedula3: HTMLInputElement;
  private inCedula4: HTMLInputElement;
  private inCedula5: HTMLInputElement;
  private selProyectoA: HTMLSelectElement;
  private selProyectoB: HTMLSelectElement;
  private btRegistrarEquipo: HTMLButtonElement;
  private btEquipos: HTMLButtonElement;
  private equipo: Cl_mEquipo;
  constructor() {
    super({ formName: "equipoForm" });
    this.selNombre = this.crearHTMLSelectElement("selNombre", {
      onchange: () => {
        this.equipo.nombre = this.selNombre.value;
        this.refresh();
      },
      refresh: () =>
        (this.selNombre.style.borderColor = this.equipo.nombre
          ? "aqua"
          : "red"),
    });
    this.inLider = this.crearHTMLInputElement("inLider", {
      refresh: () =>
        (this.inLider.style.borderColor = this.equipo.lider ? "aqua" : "red"),
      onchange: () => {
        this.equipo.lider = this.lider;
        this.refresh();
      },
    });
    this.inCedula2 = this.crearHTMLInputElement("inCedula2", {
      refresh: () =>
        (this.inCedula2.style.borderColor = this.equipo.cedula2
          ? "aqua"
          : "red"),
      onchange: () => {
        this.equipo.cedula2 = this.cedula2;
        this.refresh();
      },
    });
    this.btRegistrarEquipo = this.crearHTMLButtonElement("btRegistrarEquipo", {
      onclick: () => {
        if (!this.equipo.dataOk()) alert("Revise los datos en rojo");
        else
          this.controlador?.registrarEquipo({
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
            callback: (error: string) => {
              if (error) alert(error);
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
                this.equipo = new Cl_mEquipo();
              }
              this.refresh();
            },
          });
      },
    });
    this.btEquipos = this.crearHTMLButtonElement("btEquipos", {
      onclick: () => {
        this.controlador?.infoEquipos(
          ({
            error,
            equipos,
          }: {
            error: string | false;
            equipos: iEquipo[];
          }) => {
            if (error) alert(error);
            else {
              let msg = "",
                i = 1;
              equipos.map((equipo) => {
                msg += `${i++}. ${equipo.nombre}: ${equipo.lider}, ${
                  equipo.cedula2
                }, ${equipo.cedula3}, ${equipo.cedula4}, ${equipo.cedula5}, (${
                  equipo.proyectoA
                }, ${equipo.proyectoB})\n`;
              });
              alert(msg);
            }
          }
        );
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
