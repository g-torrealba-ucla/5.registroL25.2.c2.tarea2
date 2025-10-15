import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php";
import Cl_mEquipo, { iEquipo } from "./Cl_mEquipo.js";
interface iResultObject {
  object: iEquipo | null;
  error: string | false;
}
interface iResultObjects {
  objects: [iEquipo] | null;
  error: string | false;
}

export default class Cl_mEquipos {
  public equipos: Cl_mEquipo[];
  public db: Cl_dcytDb;
  constructor() {
    this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
    this.equipos = [];
  }
  registrarEquipo({
    equipo,
    callback,
  }: {
    equipo: iEquipo;
    callback: Function;
  }): void {
    this.cargarEquipos((error: string | false) => {
      if (error) throw new Error(error);
      else {
        if (this.equipos.find((eq) => eq.nombre === equipo.nombre))
          callback("El equipo ya se encuentra registrado");
        else
          this.db.addRecord({
            tabla: "eqs.L25.2.c2.tarea2",
            object: equipo,
            callback: ({ error }: iResultObject) => {
              if (error) throw new Error(error);
              callback?.(error);
            },
          });
      }
    });
  }
  infoEquipos(callback: Function): void {
    this.cargarEquipos((error: string | false) => {
      let equipos = [] as iEquipo[];
      if (!error) this.equipos.map((equipo) => equipos.push(equipo.toJSON()));
      callback(error, equipos);
    });
  }
  cargarEquipos(callback: (error: string | false) => void): void {
    this.db.listRecords({
      tabla: "eqs.L25.2.c2.tarea2",
      callback: ({ objects, error }: iResultObjects) => {
        if (error) throw new Error(error);
        else {
          this.equipos = [];
          objects?.map((equipo) => this.equipos.push(new Cl_mEquipo(equipo)));
          callback?.(error);
        }
      },
    });
  }
}
