$(document).ready(initializeEvents);

function initializeEvents() {
    $("input").focus(setfocus);
    $("input").blur(setBlur);
    // $("#text2").focus(setfocus);
    // $("#text2").blur(setBlur);
    var a
}

function setfocus() {

    $(this).attr("style", function(i, valorOriginal) {
        a = valorOriginal;
        console.log("color original: " + a)
        return "color:red";
    })
}

function setBlur() {
    $(this).attr("style", a);
}