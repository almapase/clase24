var random = function(min,max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}


$("#evento").on("click", function(event) {
  var target = $(event.target);
  if (target.is("div")) {
    var color = "#FFFF"+random(1,8)+random(1,8);
    $("#evento").css("background-color", color);
  }
})
