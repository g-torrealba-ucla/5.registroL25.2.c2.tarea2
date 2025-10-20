declare module "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php" {
  class Cl_dcytDb {

    constructor({ aliasCuenta } = { aliasCuenta: "" }) {}

    addRecord({
      tabla,
      registroAlias = null,
      object,
      callback,
    }: {
      tabla: string;
      registroAlias?: string | null;
      object: {};
      callback: ({ object, error }: iResultObject) => void;
    }) {}

    listRecords({
      tabla,
      callback,
    }: {
      tabla: string;
      callback: ({ objects, error }: iResultObjects) => void;
    }) {}
  }

  // 2. Exporta esa clase como el valor 'default' del módulo.
  export default Cl_dcytDb;
}
