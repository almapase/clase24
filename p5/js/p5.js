// Función constructora
function Telefono(numero, marca, color) {
	this.numero = numero;
	this.marca = marca;
	this.color = "";
	this.llamadas = 0;
}

// Agregando un metodo al prototipo Telefono
Telefono.prototype.marcar = function () {
	this.llamadas ++;
};

// Función que recibe un array de Telefonos y marca, y develve otro array de Telefonos de la marca
var tel_by_marca = function(array, marca) {
	return array.filter(function(e) {return e.marca == marca});
}


var tel1 = new Telefono(123, "nokia", "azul");
var tel2 = new Telefono(445, "nokia", "Rojo");
var tel3 = new Telefono(678, "iphone", "negro");
var tel4 = new Telefono(637, "iphone", "amarillo");
var tel5 = new Telefono(123, "iphone", "dorado");
var tel6 = new Telefono(486, "samsumg", "plateado");
var telefonos_arr = [tel1,tel2,tel3,tel4,tel5,tel6];

var tel_nokia = tel_by_marca(telefonos_arr, "nokia");
var tel_iphone = tel_by_marca(telefonos_arr, "iphone");
var tel_samsumg = tel_by_marca(telefonos_arr, "samsumg");

console.log("Telefonos Nokia: ");console.log(tel_nokia);
console.log("Telefonos iphone: ");console.log(tel_iphone);
console.log("Telefonos samsumg: ");console.log(tel_samsumg);
