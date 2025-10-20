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
  public db: Cl_dcytDb;
  constructor() {
    this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
    this.actividades = [];
  }
  actividadAdd({
    actividad,
    callback,
  }: {
    actividad: iActividad;
    callback: Function;
  }): void {
    this.db.addRecord({
      tabla: "L25.2.actividades",
      object: actividad,
      callback: ({ error }: iResultObject) => {
        if (error) throw new Error(error);
        callback?.(error);
      },
    });
  }
  infoActividades(callback: Function): void {
    this.cargarActividades((error: string | false) => {
      let actividades: Cl_mActividad[] = [];
      if (!error)
        this.actividades.map((actividad) =>
          actividades.push(new Cl_mActividad(actividad))
        );
      callback(error, actividades);
    });
  }
  cargarActividades(callback: Function): void {
    this.db.listRecords({
      tabla: "L25.2.actividades",
      callback: ({ objects, error }: iResultObjects) => {
        if (error) throw new Error(error);
        else {
          this.actividades = [];
          objects?.map((equipo) =>
            this.actividades.push(new Cl_mActividad(equipo))
          );
          callback?.(error);
        }
      },
    });
  }
}
