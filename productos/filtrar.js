const { leerJSON, escribirJSON } = require("../data");
const productos_db = leerJSON();

const filtrar = function (categoria) {
  //console.log(categoria);
  const productosFiltrados = productos_db.filter(
    producto => producto.categoria == categoria
  )
  //console.log(productosFiltrados);
  return productosFiltrados
}

module.exports = filtrar;
