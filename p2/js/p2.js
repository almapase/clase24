var	suma	= 0;
do {
	var	ingreso	= prompt("ingresa	un	número");
  if (!isNaN(ingreso)) {
    suma += parseInt(ingreso)
  }
}while (ingreso	!= "fin");
console.log("La suma fue: "+suma)
