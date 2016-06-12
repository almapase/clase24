// Se pide una función que recibe un arreglo como parámetro y devuelva una copia del arreglo.
// Probar con un ejemplo sencillo que funcione.

//
// var copia_arreglo = function(array) {
//   if (!(array instanceof Array)) {
//     console.log("No es un array")
//     return false
//   }else {
//     var new_array = []
//     array.forEach(function(e) {
//       new_array.push(e)
//     })
//     return new_array
//   }
// }

var copia_arreglo = function(array) {
  if (!(array instanceof Array)) {
    console.log("No es un array")
    return false
  }else {
    return array.slice(0);
  }
}


var arr1 = [21,22,23]
console.log("arr1 antes de la copia= "+arr1)
var arr2 = copia_arreglo(arr1)
arr2.push(24)
console.log("arr1= "+arr1)
console.log("arr2= "+arr2)
