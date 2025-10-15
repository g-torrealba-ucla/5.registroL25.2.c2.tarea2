import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php";
import Cl_mEquipo from "./Cl_mEquipo.js";
export default class Cl_mEquipos {
    constructor() {
        this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
        this.equipos = [];
    }
    registrarEquipo({ integrantes, callback, }) {
        this.cargarEquipos((error) => {
            if (error)
                throw new Error(error);
            else
                this.db.addRecord({
                    tabla: "equipos",
                    object: integrantes,
                    callback: ({ error }) => {
                        if (error)
                            throw new Error(error);
                        callback === null || callback === void 0 ? void 0 : callback(error);
                    },
                });
        });
    }
    cargarEquipos(callback) {
        this.db.listRecords({
            tabla: "equipos",
            callback: ({ objects, error }) => {
                if (error)
                    throw new Error(error);
                else {
                    this.equipos = [];
                    objects === null || objects === void 0 ? void 0 : objects.map((equipo) => this.equipos.push(new Cl_mEquipo(equipo)));
                    callback === null || callback === void 0 ? void 0 : callback(error);
                }
            },
        });
    }
}
