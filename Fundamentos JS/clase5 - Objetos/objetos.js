var emi = {
    nombre: 'Emiliano',
    apellido: 'Juarez',
    edad: 31
}
var luna = {
    nombre: 'Luna',
    apellido: 'Estrella',
    edad: 55
}

console.log(luna.apellido)

function apellidoMayus(persona){
    console.log(persona.apellido.toUpperCase())
}
apellidoMayus(emi);
apellidoMayus(luna);

function nombreMayus ({nombre}){
    console.log(nombre.toUpperCase())
}
nombreMayus(emi);
nombreMayus(luna);