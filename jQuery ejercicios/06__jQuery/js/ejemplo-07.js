$(document).ready(initializeEvents);

function initializeEvents() {
    $(document).mousemove(moveDetected);
    $("#caja").css({ "display": "block", "position": "relative", "background-color": "lightgrey", "width": "70px" });
}

function moveDetected(event) {
    $("#coordx").text("Coordenada x=" + event.clientX);
    $("#coordy").text("Coordenada y=" + event.clientY);
    $("#caja").css({ "left": event.clientX, "top": event.clientY });
}