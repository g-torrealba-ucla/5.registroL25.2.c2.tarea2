import Cl_mActividad, { iActividad } from "./Cl_mActividad.js";
import Cl_vGeneral, { tHTMLElement } from "./Cl_vGeneral.js";

export default class Cl_vActividades extends Cl_vGeneral {
  private selActividad: HTMLSelectElement;
  private btNueva: HTMLButtonElement;
  private lblNombre: HTMLLabelElement;
  private lblFecha: HTMLLabelElement;
  private lblDescripcion: HTMLLabelElement;
  private lblEstado: HTMLLabelElement;
  private lblCntParticipantes: HTMLLabelElement;
  private actividad: Cl_mActividad | null = null;
  constructor() {
    super({ formName: "infoActividadForm" });
    this.selActividad = this.crearHTMLSelectElement("selActividad", {
      elementsSource: this.controlador?.infoActividades(),
      valueAttributeName: "id",
      textExpresion: (actividad: iActividad) => {
        return `${actividad.fecha}: ${actividad.nombre}`;
      },
      onchange: () => {
        this.actividad =
          this.controlador?.actividadId(this.actividadId) ?? null;
        this.refresh();
      },
    });
    this.lblNombre = this.crearHTMLElement("lblNombre", {
      type: tHTMLElement.LABEL,
      refresh: () => (this.lblNombre.innerHTML = this.actividad?.nombre ?? ""),
    }) as HTMLLabelElement;
    this.lblFecha = this.crearHTMLElement("lblFecha", {
      type: tHTMLElement.LABEL,
      refresh: () => (this.lblFecha.innerHTML = this.actividad?.fecha ?? ""),
    }) as HTMLLabelElement;
    this.lblDescripcion = this.crearHTMLElement("lblDescripcion", {
      type: tHTMLElement.LABEL,
      refresh: () =>
        (this.lblDescripcion.innerHTML = this.actividad?.descripcion ?? ""),
    }) as HTMLLabelElement;
    this.lblEstado = this.crearHTMLElement("lblEstado", {
      type: tHTMLElement.LABEL,
      refresh: () => (this.lblEstado.innerHTML = this.actividad?.estado ?? ""),
    }) as HTMLLabelElement;
    this.lblCntParticipantes = this.crearHTMLElement("lblCntParticipantes", {
      type: tHTMLElement.LABEL,
      refresh: () => (this.lblCntParticipantes.innerHTML = "0"),
    }) as HTMLLabelElement;
    this.btNueva = this.crearHTMLButtonElement("btNueva", {
      onclick: () => {
        let nombre, fecha, descripcion;
        nombre = prompt("Ingrese el nombre de la actividad");
        if (nombre) fecha = prompt("Ingrese la fecha (aaaa-mm-dd)");
        if (nombre && fecha) descripcion = prompt("Ingrese la descripcion");
        if (!nombre || !fecha || !descripcion) return;
        let actividad = new Cl_mActividad({ nombre, fecha, descripcion });
        this.controlador?.nuevaActividad({
          actividad: {
            nombre: actividad.nombre,
            fecha: actividad.fecha,
            descripcion: actividad.descripcion,
          },
          callback: (error: string) => {
            if (error) alert(error);
            else alert("Se registró la actividad");
            this.refresh();
          },
        });
      },
    });
    this.actividad = null;
  }
  get actividadId(): number {
    return +this.selActividad.value;
  }
  refill() {
    let infoActividades = this.controlador?.infoActividades();
    if (!infoActividades?.length) return;
    this.selActividad.refill(infoActividades);
    if (!this.actividad)
      this.actividad = this.controlador?.actividadId(this.actividadId) ?? null;
    this.selActividad.value = this.actividad?.id?.toString() ?? "";
    super.refresh();
  }
}
