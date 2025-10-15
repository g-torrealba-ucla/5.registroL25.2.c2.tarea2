import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vGeneral {
  private _formName: string = "";
  private _vista: HTMLElement | null = null;
  private _controlador: Cl_controlador | null = null;
  private objects: HTMLElement[] = [];
  constructor({ formName }: { formName: string }) {
    this.formName = formName;
    this.vista = this.crearHTMLElement(this.formName, { isForm: true });
  }
  set formName(formName: string) {
    this._formName = formName;
  }
  get formName(): string {
    return this._formName;
  }
  set vista(vista: HTMLElement) {
    this._vista = vista;
  }
  get vista(): HTMLElement | null {
    return this._vista;
  }
  set controlador(controlador: Cl_controlador) {
    this._controlador = controlador;
  }
  get controlador(): Cl_controlador | null {
    return this._controlador;
  }

  refresh() {
    this.objects.forEach((element) => element.refresh());
  }
  crearHTMLElement(
    elementName: string,
    {
      isForm = false,
      refresh = () => {},
    }: {
      isForm?: boolean;
      refresh?: () => void;
    } = {
      isForm: false,
      refresh: () => {},
    }
  ): HTMLElement {
    let domElementName = isForm
      ? elementName
      : `${this.formName}_${elementName}`;
    let domElement = document.getElementById(domElementName) as HTMLElement;
    if (!domElement) {
      let msg = `Elemento ${domElementName} no encontrado`;
      alert(msg);
      throw new Error(msg);
    }
    domElement.refresh = refresh;
    this.objects.push(domElement);
    return domElement;
  }
  crearHTMLInputElement(
    elementName: string,
    {
      onchange = () => {},
      refresh = () => {},
    }: {
      onchange?: () => void;
      refresh?: () => void;
    } = {
      onchange: () => {},
      refresh: () => {},
    }
  ): HTMLInputElement {
    let domElementName = `${this.formName}_${elementName}`;
    let domElement = document.getElementById(
      domElementName
    ) as HTMLInputElement;
    if (!domElement) {
      let msg = `Elemento ${domElementName} no encontrado`;
      alert(msg);
      throw new Error(msg);
    }
    domElement.onchange = onchange;
    domElement.refresh = refresh;
    this.objects.push(domElement);
    return domElement;
  }
  crearHTMLButtonElement(
    elementName: string,
    {
      onclick = () => {},
      refresh = () => {},
    }: {
      onclick?: () => void;
      refresh?: () => void;
    } = {
      onclick: () => {},
      refresh: () => {},
    }
  ): HTMLButtonElement {
    let domElementName = `${this.formName}_${elementName}`;
    let domElement = document.getElementById(
      domElementName
    ) as HTMLButtonElement;
    if (!domElement) {
      let msg = `Elemento ${domElementName} no encontrado`;
      alert(msg);
      throw new Error(msg);
    }
    domElement.onclick = onclick;
    domElement.refresh = refresh;
    this.objects.push(domElement);
    return domElement;
  }
  crearHTMLSelectElement(
    elementName: string,
    {
      elements = [],
      onchange = () => {},
      refresh = () => {},
    }: {
      elements?: string[];
      onchange?: () => void;
      refresh?: () => void;
    } = {
      elements: [],
      onchange: () => {},
      refresh: () => {},
    }
  ): HTMLSelectElement {
    let domElementName = `${this.formName}_${elementName}`;
    let domElement = document.getElementById(
      domElementName
    ) as HTMLSelectElement;
    if (!domElement) {
      let msg = `Elemento ${domElementName} no encontrado`;
      alert(msg);
      throw new Error(msg);
    }
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        let option = document.createElement("option");
        option.value = elements[i];
        option.text = elements[i];
        domElement.add(option);
      }
    }
    domElement.onchange = onchange;
    domElement.refresh = refresh;
    this.objects.push(domElement);
    return domElement;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }): void {
    if (this.vista) this.vista.style.display = ver ? "flex" : "none";
  }
}
