$(document).ready(initializeEvents);
var a;

function initializeEvents() {
    $("td").mousedown(downEvent);
    $("td").mouseup(upEvent);

}

function downEvent() {
    $(this).css("background-color", "#ff0");
    a = setTimeout('alert("necesitas más tiempo")', 2000);
}

function upEvent() {
    $(this).css("background-color", "#fff");
    clearTimeout(a);
}