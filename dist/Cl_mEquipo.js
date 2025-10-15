import dtCedulas from "./_dtCedulas.js";
import dtEquipos from "./_dtEquipos.js";
import dtProyectos from "./_dtProyectos.js";
export default class Cl_mEquipo {
    constructor({ nombre, lider, cedula2, cedula3, cedula4, cedula5, proyectoA, proyectoB, } = {
        nombre: "",
        lider: 0,
        cedula2: 0,
        cedula3: 0,
        cedula4: null,
        cedula5: null,
        proyectoA: "",
        proyectoB: null,
    }) {
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
        if (dtEquipos.includes(this._nombre))
            return this._nombre;
        return false;
    }
    set lider(lider) {
        this._lider = lider;
    }
    get lider() {
        if (dtCedulas.includes(this._lider))
            return this._lider;
        return false;
    }
    set cedula2(cedula2) {
        this._cedula2 = cedula2;
    }
    get cedula2() {
        if (dtCedulas.includes(this._cedula2))
            return this._cedula2;
        return false;
    }
    set cedula3(cedula3) {
        this._cedula3 = cedula3;
    }
    get cedula3() {
        if (dtCedulas.includes(this._cedula3))
            return this._cedula3;
        return false;
    }
    set cedula4(cedula4) {
        this._cedula4 = cedula4 !== null && cedula4 !== void 0 ? cedula4 : null;
    }
    get cedula4() {
        if (!this._cedula4)
            return true;
        else if (!dtCedulas.includes(this._cedula4))
            return false;
        return this._cedula4;
    }
    set cedula5(cedula5) {
        this._cedula5 = cedula5;
    }
    get cedula5() {
        if (!this._cedula5)
            return true;
        else if (!dtCedulas.includes(this._cedula5))
            return false;
        return this._cedula5;
    }
    set proyectoA(proyectoA) {
        this._proyectoA = proyectoA;
    }
    get proyectoA() {
        if (!dtProyectos.includes(this._proyectoA))
            return false;
        return this._proyectoA;
    }
    set proyectoB(proyectoB) {
        var _a;
        this._proyectoB = (_a = proyectoB === null || proyectoB === void 0 ? void 0 : proyectoB.trim()) !== null && _a !== void 0 ? _a : null;
    }
    get proyectoB() {
        if (!this._proyectoB)
            return true;
        else if (!dtProyectos.includes(this._proyectoB))
            return false;
        return this._proyectoB;
    }
    dataOk() {
        return Boolean(this.nombre &&
            this.lider &&
            this.cedula2 &&
            this.cedula3 &&
            this.cedula4 &&
            this.cedula5 &&
            this.proyectoA &&
            this.proyectoB);
    }
    toJSON() {
        return {
            nombre: this._nombre,
            lider: this._lider,
            cedula2: this._cedula2,
            cedula3: this._cedula3,
            cedula4: this._cedula4,
            cedula5: this._cedula5,
            proyectoA: this._proyectoA,
            proyectoB: this._proyectoB,
        };
    }
}
