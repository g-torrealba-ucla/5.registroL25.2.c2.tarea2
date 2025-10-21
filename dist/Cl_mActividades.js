import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php";
import Cl_mActividad from "./Cl_mActividad.js";
export default class Cl_mActividades {
    constructor() {
        this.tbActividades = "L25.2.actividades";
        this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
        this.actividades = [];
    }
    actividadId(id) {
        return this.actividades.find((actividad) => actividad.id === id) || null;
    }
    add({ actividad, callback, }) {
        this.db.addRecord({
            tabla: this.tbActividades,
            object: actividad,
            callback: ({ error }) => {
                if (error)
                    throw new Error(error);
                this.actividades.push(new Cl_mActividad(actividad));
                callback === null || callback === void 0 ? void 0 : callback(error);
            },
        });
    }
    cargar(callback) {
        this.db.listRecords({
            tabla: this.tbActividades,
            callback: ({ objects, error }) => {
                if (error)
                    throw new Error(error);
                else {
                    this.actividades = [];
                    objects === null || objects === void 0 ? void 0 : objects.map((actividad) => this.actividades.push(new Cl_mActividad(actividad)));
                    callback === null || callback === void 0 ? void 0 : callback(error);
                }
            },
        });
    }
}
