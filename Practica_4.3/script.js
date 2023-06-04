function cambiaColorLetra() {
    var color = "#" + document.getElementById("colorlt").value;
    document.getElementById("divN").style.color = color;
}

function cambiaColorFondo() {
    var color = "#" + document.getElementById("colorbg").value;
    document.getElementById("divN").style.backgroundColor = color;
}

function cambiaTamaño() {
    var tamaño = document.getElementById("size").value + "px";
    document.getElementById("divN").style.fontSize = tamaño;
}
function cambiaNegrita() {
    if(document.getElementById("bold").checked == true)
    document.getElementById("divN").style.fontWeight = "bold";
    else{
        document.getElementById("divN").style.fontWeight = "normal";
    }
}
function cambiaItalia() {
    if(document.getElementById("italia").checked == true)
    document.getElementById("divN").style.fontStyle = "italic";
    else{
        document.getElementById("divN").style.fontStyle = "normal";
    }
}
function cambiaSubra() {
    if(document.getElementById("subra").checked == true)
    document.getElementById("divN").style.textDecoration = "underline";
    else{
        document.getElementById("divN").style.fontWeight = "normal";
    }
}

document.getElementById("button1").addEventListener("click", function (event) {
    cambiaColorLetra();
});

document.getElementById("button2").addEventListener("click", function (event) {
    cambiaColorFondo();
});

document.getElementById("button3").addEventListener("click", function (event) {
    cambiaTamaño();
});