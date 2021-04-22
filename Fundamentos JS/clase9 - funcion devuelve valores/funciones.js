var emi = {
    nombre: 'Emiliano',
    apellido: 'Juarez',
    edad: 31,
    programador: true,
    arquitecto: false,
    doctor: false,
    handball: true,
    cocinero: false,
}
emi.superHero = 'Batman'; //agregar nueva propiedad a objeto emi.
delete emi.doctor;          //borra propiedad doctor en emi.
emi.hasOwnProperty("superHero"); //devuelve si emi tiene la key superHero.

var luna = {
    nombre: 'Luna',
    apellido: 'Estrella',
    edad: 55
}
let felipe = {
    nombre: 'Felipe',
    apellido: 'Juarez',
    edad: 5
}
const MAYORIA_DE_EDAD = 18;

function imprimeProfesion(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.programador){
        console.log(' programador')
    }
    if(persona.arquitecto){
        console.log(' arquitecto')
    }else{
        console.log(' no es arquitecto')
    }
    if(persona.doctor){
        console.log(' doctor')
    }
    if(persona.handball){
        console.log(' juega handball')
    }
    if(persona.cocinero){
        console.log(' cocinero')
    }
}
function esMayorDeEdad(persona){
    return persona.edad >=MAYORIA_DE_EDAD
}

function imprimirEsMayorDeEdad (persona){
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
imprimirEsMayorDeEdad(emi);
imprimirEsMayorDeEdad(felipe);
function imprimeProfesionTernario(persona){
    return persona.programador ? `${persona.nombre} es programador`
    : persona.arquitecto ? `${persona.nombre} es arquitecto`
    : `${persona.nombre} no es ni arquitecto ni programador`
}
console.log(imprimeProfesionTernario(emi))