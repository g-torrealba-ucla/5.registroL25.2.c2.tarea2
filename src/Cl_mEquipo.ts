import dtCedulas from "./_dtCedulas.js";
import dtEquipos from "./_dtEquipos.js";
import dtProyectos from "./_dtProyectos.js";
export interface iEquipo {
  nombre: string;
  lider: number;
  cedula2: number;
  cedula3: number;
  cedula4: number | null;
  cedula5: number | null;
  proyectoA: string;
  proyectoB: string | null;
}

export default class Cl_mEquipo {
  private _nombre: string = "";
  private _lider: number = 0;
  private _cedula2: number = 0;
  private _cedula3: number = 0;
  private _cedula4: number | null = null;
  private _cedula5: number | null = null;
  private _proyectoA: string = "";
  private _proyectoB: string | null = null;
  constructor(
    {
      nombre,
      lider,
      cedula2,
      cedula3,
      cedula4,
      cedula5,
      proyectoA,
      proyectoB,
    }: iEquipo = {
      nombre: "",
      lider: 0,
      cedula2: 0,
      cedula3: 0,
      cedula4: null,
      cedula5: null,
      proyectoA: "",
      proyectoB: null,
    }
  ) {
    this.nombre = nombre;
    this.lider = lider;
    this.cedula2 = cedula2;
    this.cedula3 = cedula3;
    this.cedula4 = cedula4;
    this.cedula5 = cedula5;
    this.proyectoA = proyectoA;
    this.proyectoB = proyectoB;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get nombre(): string | false {
    if (dtEquipos.includes(this._nombre)) return this._nombre;
    return false;
  }
  set lider(lider: number) {
    this._lider = lider;
  }
  get lider(): number | false {
    if (dtCedulas.includes(this._lider)) return this._lider;
    return false;
  }
  set cedula2(cedula2: number) {
    this._cedula2 = cedula2;
  }
  get cedula2(): number | false {
    if (dtCedulas.includes(this._cedula2)) return this._cedula2;
    return false;
  }
  set cedula3(cedula3: number) {
    this._cedula3 = cedula3;
  }
  get cedula3(): number | false {
    if (dtCedulas.includes(this._cedula3)) return this._cedula3;
    return false;
  }
  set cedula4(cedula4: number | null) {
    this._cedula4 = cedula4 ?? null;
  }
  get cedula4(): number | boolean {
    if (!this._cedula4) return true;
    else if (!dtCedulas.includes(this._cedula4)) return false;
    return this._cedula4;
  }
  set cedula5(cedula5: number | null) {
    this._cedula5 = cedula5;
  }
  get cedula5(): number | boolean {
    if (!this._cedula5) return true;
    else if (!dtCedulas.includes(this._cedula5)) return false;
    return this._cedula5;
  }
  set proyectoA(proyectoA: string) {
    this._proyectoA = proyectoA;
  }
  get proyectoA(): string | false {
    if (!dtProyectos.includes(this._proyectoA)) return false;
    return this._proyectoA;
  }
  set proyectoB(proyectoB: string | null) {
    this._proyectoB = proyectoB?.trim() ?? null;
  }
  get proyectoB(): string | boolean {
    if (!this._proyectoB) return true;
    else if (!dtProyectos.includes(this._proyectoB)) return false;
    return this._proyectoB;
  }
  dataOk(): boolean {
    return Boolean(
      this.nombre &&
        this.lider &&
        this.cedula2 &&
        this.cedula3 &&
        this.cedula4 &&
        this.cedula5 &&
        this.proyectoA &&
        this.proyectoB
    );
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
