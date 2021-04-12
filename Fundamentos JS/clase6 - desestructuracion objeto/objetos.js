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

function nameUppercase(persona){
    // var nombre = persona.nombre
    // var {nombre}  = persona
    // var {edad}    = persona
    var {nombre, edad} = persona
    nombre = nombre.toUpperCase()
    console.log(`${nombre} tiene ${edad}`)
}
nameUppercase(luna);