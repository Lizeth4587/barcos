var arregloBarco;
var x_inicio=10;
var y_inicio = 10;

function crearBarco(){

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

    arregloBarco = new Array(
			       new Barco("Barco2", "green", "sur", 20, 50, 100, x_inicio, 10)
		
		);
	for (var i = arregloBarco.length - 1; i >= 0; i--) {
		arregloBarco[i].Dibujar(context);
	}


	var objBarco = new Barco("Barco1",
		                      "black",
		                      "este",
		                      10,
		                      10,
		                      10,
		                      10,
		                      y_inicio);

	objBarco.Dibujar(context);

}

var id1;
var t = 0;

function iniciarAnimacion(){
	id1 = setInterval(
			Animacion,
			42
		);
}


function Animacion(){

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	objBarco.forEach(
		function(element) {
	  		element.Y = y_inicio + (element.Velocidad*(t/1000))
	  	    element.X = x_inicio + (element.Velocidad*(t/1000))
		}
	);

	t+=42;

	}

function detenerAnimacion(){
	if(id1 != null)
		clearInterval(id1);
}
