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

class Anciano extends Humano{
}
class Bebe extends Humano{
    constructor(nombre,apellido,altura,edad){
        super(nombre,apellido,altura)
        this.edad = edad
    }
    saludar(x){
        console.log(`Soy un bebé, mis padres me pusieron ${this.nombre} de nombre`);
        if(x){
            x(this.nombre)
        }
        gateo(this.nombre)
    }
    dormir(){
        return true
    }
}

var gateo = (x) =>{
    console.log(`${x} no camina, gatea.`)
}

var emi = new Humano('Emiliano','Juárez',1.86)
var carla = new Anciano('Carla','Palomar',1.59)
var leo = new Bebe('Leo','Perez',0.50,1)

emi.saludar()
leo.saludar()
leo.saludar(gateo)
