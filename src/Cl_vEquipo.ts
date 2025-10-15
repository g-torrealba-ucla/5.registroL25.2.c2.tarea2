import Cl_controlador from "./Cl_controlador.js";
import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vEquipo extends Cl_vGeneral{
  private selNombre: HTMLSelectElement;
  private inLider: HTMLInputElement;
  private inCedula2: HTMLInputElement;
  private inCedula3: HTMLInputElement;
  private inCedula4: HTMLInputElement;
  private inCedula5: HTMLInputElement;
  private selProyectoA: HTMLSelectElement;
  private selProyectoB: HTMLSelectElement;
  private btRegistrarProyecto: HTMLButtonElement;
  constructor() {
    super({ formName: "equipoForm" });
    this.inLider = this.crearHTMLInputElement({ elementName: "inLider" });
    
    this.btRegistrar.onclick = () => {
      if (!this.controlador) throw new Error("No hay controlador");
      this.controlador.registrarIntegrantes({
        integrantes: { cedula1: this.cedula1, cedula2: this.cedula2 },
        callback: (error: string) => {
          if (error) alert(error);
          else alert("Integrantes registrados");
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
