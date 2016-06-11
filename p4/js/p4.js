var	largo	= prompt("ingresa	el largo");

for (var i = 0; i < largo; i++) {
	for (var j = 0; j < largo; j++) {
		if (i == 0 || i == (largo-1) || j == 0 || j == (largo-1)) {
			document.write("*")
		}
		else{
			document.write("&nbsp;&nbsp;")
		}
	}
	document.write("<br>")
}
