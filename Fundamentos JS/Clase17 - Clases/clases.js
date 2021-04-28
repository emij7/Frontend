class Humano {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        this.piernas = 2
}
    saludar(){
    console.log(`Hola, me llamo ${this.nombre}`)
    }
}
// Humano.prototype = {
//     constructor: Humano,
//     piernas: 2,
//     esAlto: function(){
//         if(this.altura>1.80){
//             console.log(`${this.nombre} es alto, mide ${this.altura} cms.`)
//         }else{
//             console.log(`Con apenas ${this.altura} cms, ${this.nombre} no es una persona alta.`)
//         }
//     }
// }

class Anciano extends Humano{
//Al no haber nada acá dentro se comporta exactamente como el padre Humano
}
class Bebe extends Humano{
    constructor(nombre,apellido,altura,edad){
        super(nombre,apellido,altura)
        this.edad = edad
    }
    dormir(){
        return true
    }
}

var emi = new Humano('Emiliano','Juárez',1.86)
var carla = new Anciano('Carla','Palomar',1.59)
var leo = new Bebe('Leo','Perez',0.50,1)
emi.saludar()
carla.saludar()
