//alert("Todo está bien");

//const x = document.getElementById("areaDeDibujo");

document.addEventListener("keydown", dibujarTeclado);
const d = document.getElementById("areaDeDibujo");
const papel = d.getContext("2d");
let x  = 200;
let y = 200;

let teclas = {
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN :40
}; //Objeto
console.log(teclas);

function dibujarTeclado(evento) {
    //alert("Oh Por Dios");
    //console.log(evento.keyCode);
    const colorcito = "white";
    const movimiento = 5;

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

dibujarLinea("white", 199, 199, 201, 201, papel);