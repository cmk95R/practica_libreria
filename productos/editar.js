const {leerJSON,escribirJSON} = require('../data');

const productos = leerJSON()

const editar = function(id){

    const productoAModificar = productos.find(producto => producto.id === id);

    if(!productoAModificar){
      return `\n    *** NOT FOUND ***\n`
    }

    const {nombre, marca} = productoAModificar;
    const productosModificados =  productos.map(producto => {
      
      if(producto.id === id){
        producto.stock = !producto.stock
      }
      
      return producto
    })

    escribirJSON(productosModificados);

    return `El producto "${nombre} | ${marca}" se modificó satisfactoriamente`
  }
  module.exports = editar
