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
