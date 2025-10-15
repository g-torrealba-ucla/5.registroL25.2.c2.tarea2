import dtCedulas from "./_dtCedulas.js";
export default class Cl_mEquipo {
    constructor({ nombre, lider, cedula2, cedula3, cedula4, cedula5, proyectoA, proyectoB, }) {
        this._nombre = "";
        this._lider = 0;
        this._cedula2 = 0;
        this._cedula3 = 0;
        this._cedula4 = null;
        this._cedula5 = null;
        this._proyectoA = "";
        this._proyectoB = null;
        this.nombre = nombre;
        this.lider = lider;
        this.cedula2 = cedula2;
        this.cedula3 = cedula3;
        this.cedula4 = cedula4;
        this.cedula5 = cedula5;
        this.proyectoA = proyectoA;
        this.proyectoB = proyectoB;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set lider(lider) {
        this._lider = lider;
    }
    get lider() {
        return this._lider;
    }
    set cedula2(cedula2) {
        this._cedula2 = cedula2;
    }
    get cedula2() {
        return this._cedula2;
    }
    set cedula3(cedula3) {
        this._cedula3 = cedula3;
    }
    get cedula3() {
        return this._cedula3;
    }
    set cedula4(cedula4) {
        this._cedula4 = cedula4;
    }
    get cedula4() {
        return this._cedula4;
    }
    set cedula5(cedula5) {
        this._cedula5 = cedula5;
    }
    get cedula5() {
        return this._cedula5;
    }
    set proyectoA(proyectoA) {
        this._proyectoA = proyectoA;
    }
    get proyectoA() {
        return this._proyectoA;
    }
    set proyectoB(proyectoB) {
        this._proyectoB = proyectoB;
    }
    get proyectoB() {
        return this._proyectoB;
    }
    checkDatos() {
        if (!dtCedulas.includes(this.cedula1))
            return { error: "cedula1", atributo: "No existe la cedula1" };
        if (!dtCedulas.includes(this.cedula2))
            return { error: "cedula2", atributo: "No existe la cedula2" };
        return { error: false, atributo: "" };
    }
    cedulaEnEquipo(integrantes) {
        if ([this.cedula1, this.cedula2].includes(integrantes.cedula1))
            return "cedula1";
        if ([this.cedula1, this.cedula2].includes(integrantes.cedula2))
            return "cedula2";
        return false;
    }
    toJSON() {
        return {
            cedula1: this.cedula1,
            cedula2: this.cedula2,
        };
    }
}
