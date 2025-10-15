import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php";
import Cl_mEquipo from "./Cl_mEquipo.js";
interface iResultObject {
  object: iIntegrantes | null;
  error: string | false;
}
interface iResultObjects {
  objects: [iIntegrantes] | null;
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
    integrantes,
    callback,
  }: {
    integrantes: iIntegrantes;
    callback: Function;
  }): void {
    this.cargarEquipos((error: string | false) => {
      if (error) throw new Error(error);
      else
        this.db.addRecord({
          tabla: "equipos",
          object: integrantes,
          callback: ({ error }: iResultObject) => {
            if (error) throw new Error(error);
            callback?.(error);
          },
        });
    });
  }
  cargarEquipos(callback?: Function): void {
    this.db.listRecords({
      tabla: "equipos",
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
