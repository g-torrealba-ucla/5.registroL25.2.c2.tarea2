import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php";
import { iActividad } from "./Cl_mActividad.js";
import Cl_mActividad from "./Cl_mActividad.js";
interface iResultObject {
  object: iActividad | null;
  error: string | false;
}
interface iResultObjects {
  objects: [iActividad] | null;
  error: string | false;
}

export default class Cl_mActividades {
  public actividades: Cl_mActividad[];
  private db: Cl_dcytDb;
  readonly tbActividades: string = "L25.2.actividades";
  constructor() {
    this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
    this.actividades = [];
  }
  actividadId(id: number): Cl_mActividad | null {
    return this.actividades.find((actividad) => actividad.id === id) || null;
  }
  add({
    actividad,
    callback,
  }: {
    actividad: iActividad;
    callback: Function;
  }): void {
    this.db.addRecord({
      tabla: this.tbActividades,
      object: actividad,
      callback: ({ error }: iResultObject) => {
        if (error) throw new Error(error);
        this.actividades.push(new Cl_mActividad(actividad));
        callback?.(error);
      },
    });
  }
  cargar(callback: Function): void {
    this.db.listRecords({
      tabla: this.tbActividades,
      callback: ({ objects, error }: iResultObjects) => {
        if (error) throw new Error(error);
        else {
          this.actividades = [];
          objects?.map((actividad) =>
            this.actividades.push(new Cl_mActividad(actividad))
          );
          callback?.(error);
        }
      },
    });
  }
}
