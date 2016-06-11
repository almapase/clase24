// Se pide una función que recibe un arreglo como parámetro y devuelva una copia del arreglo.
// Probar con un ejemplo sencillo que funcione.


var copia_arreglo = function(array) {
  if (!(array instanceof Array)) {
    console.log("No es un array")
    return false
  }else {
    var new_array = []
    array.forEach(function(e) {
      new_array.push(e)
    })
    return new_array
  }
}
