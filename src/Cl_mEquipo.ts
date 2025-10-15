import dtCedulas from "./_dtCedulas.js";
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
  constructor({
    nombre,
    lider,
    cedula2,
    cedula3,
    cedula4,
    cedula5,
    proyectoA,
    proyectoB,
  }: iEquipo) {
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
  get nombre(): string {
    return this._nombre;
  }
  set lider(lider: number) {
    this._lider = lider;
  }
  get lider(): number {
    return this._lider;
  }
  set cedula2(cedula2: number) {
    this._cedula2 = cedula2;
  }
  get cedula2(): number {
    return this._cedula2;
  }
  set cedula3(cedula3: number) {
    this._cedula3 = cedula3;
  }
  get cedula3(): number {
    return this._cedula3;
  }
  set cedula4(cedula4: number | null) {
    this._cedula4 = cedula4;
  }
  get cedula4(): number | null {
    return this._cedula4;
  }
  set cedula5(cedula5: number | null) {
    this._cedula5 = cedula5;
  }
  get cedula5(): number | null {
    return this._cedula5;
  }
  set proyectoA(proyectoA: string) {
    this._proyectoA = proyectoA;
  }
  get proyectoA(): string {
    return this._proyectoA;
  }
  set proyectoB(proyectoB: string | null) {
    this._proyectoB = proyectoB;
  }
  get proyectoB(): string | null {
    return this._proyectoB;
  }
  checkDatos(): { atributo: string; error: string | boolean } {
    if (!dtCedulas.includes(this.cedula1))
      return { error: "cedula1", atributo: "No existe la cedula1" };
    if (!dtCedulas.includes(this.cedula2))
      return { error: "cedula2", atributo: "No existe la cedula2" };
    return { error: false, atributo: "" };
  }
  cedulaEnEquipo(integrantes: iIntegrantes): string | false {
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
