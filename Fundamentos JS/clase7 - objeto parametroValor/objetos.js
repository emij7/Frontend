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

function sumar1(persona) {
    return { // return siginifca que la funcion "devuelve"  
      ...persona, // desglosamos al objecto y podemos modificar o añadir nuevos atributos o propiedades, hay que poner la , para poner lo siguiente 
      edad : persona.edad + 1, //aqui estamos moficando solo la propiedad 
      nacionalidad : "Argentina" //Agrego una nueva propiedad al objeto
    }
    // con return hemos creado un nuevo objeto  nombre: el mismo que hemos invocado pq no lo hemos modificado pero la edad cambiada
 }
 
 sumar1(emi)
 
 //si llamamos a sacha el objecto antiguo sigue siendo el mismo.....por  lo tanto para tener ese nuevo objeto definimos una nueva variable  y llamamos a la función 
 
 const emiViejo = sumar1(emi)

 console.log(emiViejo.edad)
 console.log(emiViejo.nacionalidad)
