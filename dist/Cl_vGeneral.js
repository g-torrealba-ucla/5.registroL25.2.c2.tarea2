export default class Cl_vGeneral {
    constructor({ formName }) {
        this._formName = "";
        this._vista = null;
        this._controlador = null;
        this.objects = [];
        this.formName = formName;
        this.vista = this.crearHTMLElement(this.formName, { isForm: true });
    }
    set formName(formName) {
        this._formName = formName;
    }
    get formName() {
        return this._formName;
    }
    set vista(vista) {
        this._vista = vista;
    }
    get vista() {
        return this._vista;
    }
    set controlador(controlador) {
        this._controlador = controlador;
    }
    get controlador() {
        return this._controlador;
    }
    refresh() {
        this.objects.forEach((element) => element.refresh());
    }
    crearHTMLElement(elementName, { isForm = false, refresh = () => { }, } = {
        isForm: false,
        refresh: () => { },
    }) {
        let domElementName = isForm
            ? elementName
            : `${this.formName}_${elementName}`;
        let domElement = document.getElementById(domElementName);
        if (!domElement) {
            let msg = `Elemento ${domElementName} no encontrado`;
            alert(msg);
            throw new Error(msg);
        }
        domElement.refresh = refresh;
        this.objects.push(domElement);
        return domElement;
    }
    crearHTMLInputElement(elementName, { onchange = () => { }, refresh = () => { }, } = {
        onchange: () => { },
        refresh: () => { },
    }) {
        let domElementName = `${this.formName}_${elementName}`;
        let domElement = document.getElementById(domElementName);
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
    crearHTMLButtonElement(elementName, { onclick = () => { }, refresh = () => { }, } = {
        onclick: () => { },
        refresh: () => { },
    }) {
        let domElementName = `${this.formName}_${elementName}`;
        let domElement = document.getElementById(domElementName);
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
    crearHTMLSelectElement(elementName, { elements = [], onchange = () => { }, refresh = () => { }, } = {
        elements: [],
        onchange: () => { },
        refresh: () => { },
    }) {
        let domElementName = `${this.formName}_${elementName}`;
        let domElement = document.getElementById(domElementName);
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
    show({ ver = true } = { ver: true }) {
        if (this.vista)
            this.vista.style.display = ver ? "flex" : "none";
    }
}
