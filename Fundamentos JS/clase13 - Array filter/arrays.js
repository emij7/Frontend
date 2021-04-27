var sacha = {
    nombre: 'Emi',
    apellido: 'Juarez',
    altura: 1.86
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]

//Necesitamos un array y una función que va a ser una condición

var personasAltas = personas.filter(x => {
    return x.altura > 1.75
})

/* Otra forma de hacer lo de arriba sería:
const FUNC_ALTURA = ({altura}) => altura >1.75
var personasAltas = personas.filter(FUNC_ALTURA)


De esta forma puede que sea mas fácil de leer porque vemos que es un filter que filtra altura
*/
