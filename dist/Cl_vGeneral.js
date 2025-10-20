export const tHTMLElement = {
    CONTAINER: "container",
    INPUT: "input",
    SELECT: "select",
    BUTTON: "button",
    LABEL: "label",
};
Object.freeze(tHTMLElement);
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
    crearHTMLElement(elementName, { isForm = false, type = tHTMLElement.CONTAINER, onclick = () => { }, onchange = () => { }, refresh = () => { }, } = {
        isForm: false,
        type: tHTMLElement.CONTAINER,
        onclick: () => { },
        onchange: () => { },
        refresh: () => { },
    }) {
        let domElementName = isForm
            ? elementName
            : `${this.formName}_${elementName}`, domElement;
        if (type === tHTMLElement.INPUT)
            domElement = document.getElementById(domElementName);
        else if (type === tHTMLElement.SELECT)
            domElement = document.getElementById(domElementName);
        else if (type === tHTMLElement.BUTTON)
            domElement = document.getElementById(domElementName);
        else if (type === tHTMLElement.LABEL)
            domElement = document.getElementById(domElementName);
        else
            domElement = document.getElementById(domElementName);
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
    crearHTMLInputElement(elementName, { oninput = () => { }, onchange = () => { }, refresh = () => { }, } = {
        oninput: () => { },
        onchange: () => { },
        refresh: () => { },
    }) {
        let domElement = this.crearHTMLElement(elementName, {
            type: tHTMLElement.INPUT,
            onchange,
            refresh,
        });
        domElement.oninput = oninput;
        return domElement;
    }
    crearHTMLButtonElement(elementName, { onclick = () => { }, refresh = () => { }, } = {
        onclick: () => { },
        refresh: () => { },
    }) {
        let domElement = this.crearHTMLElement(elementName, {
            type: tHTMLElement.BUTTON,
            onclick,
            refresh,
        });
        return domElement;
    }
    crearHTMLSelectElement(elementName, { elements = [], valueAttributeName = null, textAttributeName = null, onchange = () => { }, refresh = () => { }, } = {
        elements: [],
        valueAttributeName: null,
        textAttributeName: null,
        onchange: () => { },
        refresh: () => { },
    }) {
        let domElement = this.crearHTMLElement(elementName, {
            type: tHTMLElement.SELECT,
            onchange,
            refresh,
        });
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
    show({ ver = true } = { ver: true }) {
        if (this.vista)
            this.vista.style.display = ver ? "flex" : "none";
    }
}
