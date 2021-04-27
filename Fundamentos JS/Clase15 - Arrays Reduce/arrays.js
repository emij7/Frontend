var emi = {
    nombre: 'Emi',
    apellido: 'Juarez',
    altura: 1.86,
    perros: 1
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    perros: 3
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    perros: 0
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    perros: 0
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    perros: 5
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    perros: 4
}

var personas = [emi, alan, martin, dario, vicky, paula]
personas[0].altura;
personas[0]['altura'];
personas.forEach(persona => {
    console.log(`${persona.nombre} mide ${persona.altura}`)
});

personas[0].nombre = 'Emilio'
const CUENTA_PERROS = (x,y) => x + y.perros     //x sería acumulador, comenzado en 0 en personas.reduce, 'Y' el obj

var totalPerros = personas.reduce(CUENTA_PERROS, 0)
