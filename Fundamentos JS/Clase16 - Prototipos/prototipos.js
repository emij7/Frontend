
function Humano (nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Humano.prototype = {
    constructor: Humano,
    piernas: 2,
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombre}`)
    },
    esAlto: function(){
        if(this.altura>1.80){
            console.log(`${this.nombre} es alto, mide ${this.altura} cms.`)
        }else{
            console.log(`Con apenas ${this.altura} cms, ${this.nombre} no es una persona alta.`)
        }
    }
}
//Forma vieja herencia prototipal
function herencia (protHijo,protPadre){
    let fn = function (){}
    fn.prototype = protPadre.prototype
    protHijo.prototype = new fn
    protHijo.prototype.constructor = protHijo
}
herencia(Ancianos,Humano)

function Ancianos (nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
}

var emi = new Humano('Emiliano','Juárez',1.86)
var carla = new Humano('Carla','Palomar',1.59)
emi.saludar()
emi.esAlto()
carla.esAlto()