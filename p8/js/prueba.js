
	var largo = 5;
	$("#incrementar").on("click", function() {
		largo++
		$("ul").append("<li>"+largo+"</li>")
	})

	$("#eliminar").on("click", function() {
		$("ul > li:first").remove();
	})

	$("#agregar").on("click", function() {
		$("ul").append("<li>"+$("#text").val()+"</li>");
		$("ul > li:last").css("color", $("#color").val());
	})
