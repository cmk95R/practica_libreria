const { leerJSON, escribirJSON } = require("../data");
Producto = require("./Producto");

module.exports = {
  filtrar: require("./filtrar"),
  listar: require("./listar"),
  agregar: require("./agregar"),
  buscar: require("./buscar"),
  editar: require("./editar"),
};
