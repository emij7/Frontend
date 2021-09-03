//Objeto literal

const emi = {
    name:'Emiliano',
    age:'31',
    cursosAprobados:[
        'Curso de HTML',
        'Curso básico de Javascript',
        'Curso de React'
    ],
    aprobarCurso (curso){
        this.cursosAprobados.push(curso)
    }
}
emi.aprobarCurso('Curso de Sass')
console.log(emi)

//Prototipo - Se crea así, no se puede crear con arrow function

function Student (name,age,cursosAprobados){
    this.name = name,
    this.age = age,
    this.cursosAprobados = cursosAprobados,
    this.aprobarCurso = (curso)=>{
        this.cursosAprobados.push(curso)
    }
}
    //Crear método por fuera del prototipo y esconde el método dentro de las instancias del prototipo. Va a estar dentro de: __proto__
// Student.prototype.aprobarCurso = (curso)=>{
//     this.cursosAprobados.push(curso)
// }

const normis = new Student('Norma',61,['SASS','CSS','HTML'])
console.log(normis)


//Clases

class Jugadores {
    constructor(nombre,edad,posicion){
        this.nombre = nombre,
        this.edad = edad,
        this.posicion = posicion
    }
    agregarPosicion(pos){
        this.posicion.push(pos)
    }
}
const fedeP = new Jugadores('Federico Pereyra',35,['Lateral Derecho'])
fedeP.agregarPosicion('Extremo Derecho')
console.log(fedeP)

//Existe otra forma de crear lo de arriba sin tener que pasar obligatoriamente todos los argumentos, sino que pasamos objeto literal
//Con esta forma podemos NO pasar parámetros y también podemos pasar el orden de los atributos de forma aleatoria
//Además podemos pasar valores por defecto por parámetro: en el ejemplo la cantidad de goles = 0
class Jugador {
    constructor({nombre,edad,posicion,numero,goles = 0}){
        this.nombre = nombre,
        this.edad = edad,
        this.posicion = posicion,
        this.numero = numero
        this.goles = goles
    }
    agregarPosicion(pos){
        this.posicion.push(pos)
    }
}
const fedeM = new Jugador({
    posicion: ['Lateral Izquierdo'],
    nombre: 'Federico Miranda',
    numero: 11
})
fedeM.agregarPosicion('Pivot')
console.log(fedeM)
