calculaAreaRectangulo = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value);
    this.metodoCompartido("EEEEEAH!");
}
calculaAreaTriangulo = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value) / 2;
    this.metodoCompartido("OOOOOH!");
}
calculaAreaElipse = function() {
    this.resultado.value = (parseInt(this.alto.value) / 2) *
        (parseInt(this.ancho.value) / 2) * Math.PI;
    this.metodoCompartido("OOOOOH!");
}

function funcion_callback() {
    alert("hola");
}
//var a = new funcion_callback;
// Rectangulo
var Rectangulo = Figura.Heredar(calculaAreaRectangulo, "Rectangulo", funcion_callback);
// Triangulo
var Triangulo = Figura.Heredar(calculaAreaTriangulo, "Triangulo", funcion_callback);

var Elipse = Figura.Heredar(calculaAreaElipse, "Elipse", funcion_callback);