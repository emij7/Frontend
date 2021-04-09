var numero = 14;
numero = numero +1;
numero += 1;
numero++;
//formas de aumentar en 1 cualquier número. Para restar uso -.

var precio = 21.33;
var total = precio * 3;
var totalConTruco = precio * 100 * 3 / 100;
var totalRedondeado = Math.round(precio * 3);
var totalConDecimal = total.toFixed(3); //lo convierte en string
totalConDecimal = parseFloat(totalConDecimal); //convierte string en número


var cantidad = 10;
var division = cantidad/3;
var resto = cantidad % 3;
