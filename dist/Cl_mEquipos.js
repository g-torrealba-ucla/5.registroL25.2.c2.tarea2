import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php";
import Cl_mEquipo from "./Cl_mEquipo.js";
export default class Cl_mEquipos {
    constructor() {
        this.db = new Cl_dcytDb({ aliasCuenta: "PROFESOR" });
        this.equipos = [];
    }
    registrarEquipo({ equipo, callback, }) {
        this.cargarEquipos((error) => {
            if (error)
                throw new Error(error);
            else {
                if (this.equipos.find((eq) => eq.nombre === equipo.nombre))
                    callback("El equipo ya se encuentra registrado");
                else
                    this.db.addRecord({
                        tabla: "eqs.L25.2.c2.tarea2",
                        object: equipo,
                        callback: ({ error }) => {
                            if (error)
                                throw new Error(error);
                            callback === null || callback === void 0 ? void 0 : callback(error);
                        },
                    });
            }
        });
    }
    infoEquipos(callback) {
        this.cargarEquipos((error) => {
            let equipos = [];
            if (!error)
                this.equipos.map((equipo) => equipos.push(equipo.toJSON()));
            callback(error, equipos);
        });
    }
    cargarEquipos(callback) {
        this.db.listRecords({
            tabla: "eqs.L25.2.c2.tarea2",
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
