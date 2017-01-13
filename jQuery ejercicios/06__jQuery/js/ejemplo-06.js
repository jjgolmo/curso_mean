$(document).ready(initializeEvents);

function initializeEvents() {
    /* $("a").mouseover(inMouseEvent);
     $("a").mouseout(outMouseEvent);*/
    $("a").hover(inMouseEvent, outMouseEvent);
}

function inMouseEvent() {
    $(this).css({
        "background-color": "#ff0",
        "border-style": "solid",
        "border-width": "5px",
        "border-color": "blue",
        "background-color": "yellow"
    });
}

function outMouseEvent() {
    $(this).css("background-color", "#fff");
}