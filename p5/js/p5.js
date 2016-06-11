function Telefono(numero, marca) {
	this.numero = numero;
	this.marca = marca;
	this.color = "";
	this.llamadas = 0;

	this.marcar = function() {
		this.llamadas ++;
	}
}

var tel_by_marca = function(array, marca) {
	return array.filter(function(e) {return e.marca == marca});
}


var tel1 = new Telefono(123, "nokia");
var tel2 = new Telefono(445, "nokia");
var tel3 = new Telefono(678, "iphone");
var tel4 = new Telefono(637, "iphone");
var tel5 = new Telefono(123, "iphone");
var tel6 = new Telefono(486, "samsumg");
var telefonos_arr = [tel1,tel2,tel3,tel4,tel5,tel6];

var tel_nokia = tel_by_marca(telefonos_arr, "nokia");
