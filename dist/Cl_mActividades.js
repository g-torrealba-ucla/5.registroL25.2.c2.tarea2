import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php";
import Cl_mActividad from "./Cl_mActividad.js";
export default class Cl_mActividades {
    constructor() {
        this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
        this.actividades = [];
    }
    actividadAdd({ actividad, callback, }) {
        this.db.addRecord({
            tabla: "L25.2.actividades",
            object: actividad,
            callback: ({ error }) => {
                if (error)
                    throw new Error(error);
                callback === null || callback === void 0 ? void 0 : callback(error);
            },
        });
    }
    infoActividades(callback) {
        this.cargarActividades((error) => {
            let actividades = [];
            if (!error)
                this.actividades.map((actividad) => actividades.push(new Cl_mActividad(actividad)));
            callback(error, actividades);
        });
    }
    cargarActividades(callback) {
        this.db.listRecords({
            tabla: "L25.2.actividades",
            callback: ({ objects, error }) => {
                if (error)
                    throw new Error(error);
                else {
                    this.actividades = [];
                    objects === null || objects === void 0 ? void 0 : objects.map((equipo) => this.actividades.push(new Cl_mActividad(equipo)));
                    callback === null || callback === void 0 ? void 0 : callback(error);
                }
            },
        });
    }
}
