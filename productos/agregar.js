const Producto = require ("./Producto")
const {leerJSON, escribirJSON} = require("../data");
const productos_db = leerJSON();

const agregar = function(nombre,marca,precio,descuento){
  let productos = productos_db;
  let ultimoID = productos[productos.length - 1] ? productos[productos.length - 1].id : 0;
  let nuevoProducto = new Producto(ultimoID + 1,nombre,marca,precio,descuento);
  
  productos.push(nuevoProducto)
  
  escribirJSON(productos)

  return `El producto"${nuevoProducto,nombre} | ${nuevoProducto.marca}" se registro satisfactoriamente `

}
module.exports = agregar;
