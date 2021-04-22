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


const esMayorDeEdad = ({edad}) => edad >=MAYORIA_DE_EDAD

//RETO
const esMenorDeEdad = x => !esMayorDeEdad(x)

