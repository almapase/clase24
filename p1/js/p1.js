var suma_arreglo = function(array) {
  var suma = 0
  if (!(array instanceof Array)) {
    console.log("No es un array")
    return false
  }else {
    array.forEach(function(e) {
      if (!isNaN(e)) {
        suma += e
      }
    })
    return suma
  }
}

var numeros = [1,2,3,4,5,6]
var suma = suma_arreglo(numeros)
console.log(suma)
