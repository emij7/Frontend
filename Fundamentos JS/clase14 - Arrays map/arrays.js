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
// const ALTURA_CMS = x =>{
//     x.altura *= 100
//  return x
// }
//Si el return es x.altura devuelve array solo con altura. Al darle un return de x (objeto parámetro) nos devuelve un nuevo array con todos los elementos y la altura * 100. De esta forma tambien modificamos el objeto original "personas"


const ALTURA_CMS = x => {
    return {                //Devuelve un nuevo objeto, tmb podemos poner => ({...x etc . . . })
        ...x,
    altura : x.altura * 100, //Si altura : lo escribo como alTuraa, el nuevo objeto va a tener 
                             //tanto altura como alTuraa
    }
}
//Esta sería la forma correcta de crear un nuevo OBJETO con la altura en cms sin modificar el objeto original

var personaCms = personas.map(ALTURA_CMS)
console.table(personaCms)

