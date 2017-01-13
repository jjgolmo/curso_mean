$(document).ready(initializeEvents);

function initializeEvents() {
    $("input").click(modificarRecuadro);
    //    $("#boton2").click(modificarRecuadro);
    //    $("#boton3").click(modificarRecuadro);
}

function modificarRecuadro() {
    //  console.log("objeto: " + objeto)
    if (this.id == "boton1") {
        $("#descripcion").addClass("recuadro");
    } else if (this.id == "boton2") {
        $("#descripcion").removeClass("recuadro");
    } else if (this.id == "boton3") {
        $("#descripcion").toggleClass("recuadro");
    }

}