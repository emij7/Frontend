var nombre = "Emiliano", apellido = "Juarez"; //Declaración multiple de variables tipo "var".

var nombreEnMayus = nombre.toUpperCase();
var apellidoEnMinus = apellido.toLowerCase();
var primeraLetra = nombre.charAt(0);
var cantidadDeLetras = nombre.length
var nombreCompleto = `${nombre} ${apellido}`; //Para concatenar de esta forma tengo que usar comillas invertidas.
var nombreCompletoApellidoMayus = `${nombre} ${apellido.toUpperCase()}`
var nombreCortado = nombre.substr(0,3);