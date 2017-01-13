$(document).ready(inicializarEventos);

function inicializarEventos() {
    $("#titulo1").click(function() {
        $("#titulo1").css({ "color": "#ff00ff", "background-color": "#ffff00", "font-family": "Courier" });
    })


    $("#titulo2").click().css({ "color": "#ffff00", "background-color": "#ff0000", "font-family": "Arial" });
}