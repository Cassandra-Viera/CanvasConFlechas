//alert("Todo está bien");

document.addEventListener("keydown", dibujarTeclado);
const d = document.getElementById("areaDeDibujo");
const papel = d.getContext("2d");
let x  = 100;
let y = 100;

let teclas = {
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN :40
}; //Objeto
console.log(teclas);

let colorcito = "white";


function dibujarTeclado(evento) {
    //alert("Oh Por Dios");
    //console.log(evento.keyCode);
    let movimiento = 5;
    switch(evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            console.log("arriba");
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            console.log("abajo");
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            console.log("izquierda");
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            console.log("derecha");
        break;
        default:
            console.log("Otra tecla");
    }
};

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
};

//dibujarLinea("white", 199, 199, 201, 201, papel);
/*Hasta aquí llega dibujando con las flechas*/

let isDrawing = false;

d.addEventListener("mousedown", e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

d.addEventListener("mousemove", e => {
    if (isDrawing === true) {
        dibujarLinea(colorcito, x, y, e.offsetX, e.offsetY, papel);
        x = e.offsetX;
        y = e.offsetY;
        console.log("Me estoy moviendo");
    }
});

d.addEventListener("mouseup", e => {
    if (isDrawing === true) {
        dibujarLinea(colorcito , x, y, e.offsetX, e.offsetY, papel);

        isDrawing = false;
    }
});

//touch

d.addEventListener("touchstart", evento => {
        x = evento.touches[0].pageX;
        y = evento.touches[0].pageY;
        isDrawing = true;
});

d.addEventListener("touchmove", evento => {
    if (isDrawing == true) {
        dibujarLinea(colorcito, x - 10, y - 10, evento.touches[0].pageX - 10, evento.touches[0].pageY - 10, papel);
        x = evento.touches[0].pageX;
        y = evento.touches[0].pageY;
    }
});

d.addEventListener("touchend", evento => {
    isDrawing = false;
});

//colores
let color_cyan = document.getElementById("cyan");
let color_magenta = document.getElementById("magenta");
const color_yellow = document.getElementById("yellow");
const color_slateblue = document.getElementById("slateblue");
const color_white = document.getElementById("white");
const color_black = document.getElementById("black");

color_cyan.addEventListener("click", colorCyan);
color_magenta.addEventListener("click", colorMagenta);
color_yellow.addEventListener("click", colorYellow);
color_slateblue.addEventListener("click", colorSlateblue);
color_white.addEventListener("click", colorWhite);
color_black.addEventListener("click", colorBlack);

function colorCyan() {
  colorcito = "cyan";
  console.log("Color cyan seleccionado")
};
function colorMagenta() {
    colorcito = "magenta";
    console.log("Color magenta seleccionado")
};
function colorYellow() {
    colorcito = "yellow";
};
function colorSlateblue() {
    colorcito = "slateblue";
};
function colorWhite() {
    colorcito = "white";
};
function colorBlack() {
    colorcito = "black";
};
//