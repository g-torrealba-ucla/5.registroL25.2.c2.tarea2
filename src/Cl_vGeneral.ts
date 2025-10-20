import Cl_controlador from "./Cl_controlador.js";
declare global {
  interface HTMLElement {
    refresh: () => void;
  }
}
export const tHTMLElement = {
  CONTAINER: "container",
  INPUT: "input",
  SELECT: "select",
  BUTTON: "button",
  LABEL: "label",
};
Object.freeze(tHTMLElement);
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
      type = tHTMLElement.CONTAINER,
      onclick = () => {},
      onchange = () => {},
      refresh = () => {},
    }: {
      isForm?: boolean;
      type?: string;
      onclick?: () => void;
      onchange?: () => void;
      refresh?: () => void;
    } = {
      isForm: false,
      type: tHTMLElement.CONTAINER,
      onclick: () => {},
      onchange: () => {},
      refresh: () => {},
    }
  ):
    | HTMLElement
    | HTMLInputElement
    | HTMLButtonElement
    | HTMLSelectElement
    | HTMLLabelElement {
    let domElementName = isForm
        ? elementName
        : `${this.formName}_${elementName}`,
      domElement;
    if (type === tHTMLElement.INPUT)
      domElement = document.getElementById(domElementName) as HTMLInputElement;
    else if (type === tHTMLElement.SELECT)
      domElement = document.getElementById(domElementName) as HTMLSelectElement;
    else if (type === tHTMLElement.BUTTON)
      domElement = document.getElementById(domElementName) as HTMLButtonElement;
    else if (type === tHTMLElement.LABEL)
      domElement = document.getElementById(domElementName) as HTMLLabelElement;
    else domElement = document.getElementById(domElementName) as HTMLElement;
    if (!domElement) {
      let msg = `Elemento ${domElementName} no encontrado`;
      alert(msg);
      throw new Error(msg);
    }
    domElement.onclick = onclick;
    domElement.onchange = onchange;
    domElement.refresh = refresh;
    this.objects.push(domElement);
    return domElement;
  }
  crearHTMLInputElement(
    elementName: string,
    {
      oninput = () => {},
      onchange = () => {},
      refresh = () => {},
    }: {
      oninput?: () => void;
      onchange?: () => void;
      refresh?: () => void;
    } = {
      oninput: () => {},
      onchange: () => {},
      refresh: () => {},
    }
  ): HTMLInputElement {
    let domElement = this.crearHTMLElement(elementName, {
      type: tHTMLElement.INPUT,
      onchange,
      refresh,
    });
    domElement.oninput = oninput;
    return domElement as HTMLInputElement;
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
    let domElement = this.crearHTMLElement(elementName, {
      type: tHTMLElement.BUTTON,
      onclick,
      refresh,
    });
    return domElement as HTMLButtonElement;
  }
  crearHTMLSelectElement(
    elementName: string,
    {
      elements = [],
      valueAttributeName = null,
      textAttributeName = null,
      onchange = () => {},
      refresh = () => {},
    }: {
      elements?: any[];
      valueAttributeName?: string | null;
      textAttributeName?: string | null;
      onchange?: () => void;
      refresh?: () => void;
    } = {
      elements: [],
      valueAttributeName: null,
      textAttributeName: null,
      onchange: () => {},
      refresh: () => {},
    }
  ): HTMLSelectElement {
    let domElement = this.crearHTMLElement(elementName, {
      type: tHTMLElement.SELECT,
      onchange,
      refresh,
    }) as HTMLSelectElement;
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        let option = document.createElement("option");
        option.value = valueAttributeName
          ? elements[i][valueAttributeName]
          : elements[i];
        option.text = textAttributeName
          ? elements[i][textAttributeName]
          : elements[i];
        domElement.add(option);
      }
    }
    return domElement;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }): void {
    if (this.vista) this.vista.style.display = ver ? "flex" : "none";
  }
}
