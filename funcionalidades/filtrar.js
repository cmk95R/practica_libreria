//const Producto = require("../productos/Producto");
const {leerJSON,escribirJSON} = require('../data');
const productos_db = leerJSON()

const filtrar = function(categoria){
    console.log(categoria);
    //const productosFiltrados = this.productos.filter(producto => producto.marca === marca);
    const productosFiltrados = productos_db.filter(producto => producto.categoria == categoria)
    console.log(productosFiltrados);
    return productosFiltrados
  }

module.exports = filtrar