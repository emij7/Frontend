const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')


class Juego {
    constructor(){
        this.inicializar()
        this.generarSecuencia()        
        this.iluminarSecuencia()
        this.clicks()
    }
    inicializar(){
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            celeste:celeste,        //Primero la propiedad, luego le asigno la variable
            violeta,                //Si tienen el mismo nombre(como es el caso) se crea violeta:violeta solo.
            naranja,
            verde:verde
        }
        this.elegirColor = this.elegirColor.bind(this)
    }
    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n=> Math.floor(Math.random()*4))
    }
    siguienteNivel(){
        this.iluminarSecuencia()
        this.clicks()
    }
    numAColor(numero){
        switch(numero){
            case 0:
                return 'celeste'
            case 1: 
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    colorANum(color){
        switch(color){
            case 'celeste':
                return 0
            case 'violeta': 
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }

    iluminarColor(c){
        this.colores[c].classList.add('light')
        setTimeout(()=>{this.apagarColor(c)},500)
    }
    apagarColor(c){
        this.colores[c].classList.remove('light')
    }
    iluminarSecuencia(){
        for(let i=0;i<this.nivel;i++){
            const color = this.numAColor(this.secuencia[i])
            setTimeout(()=>this.iluminarColor(color),1000*i)
        }
    }
    clicks(){
        this.colores.celeste.addEventListener('click',this.elegirColor)
        this.colores.verde.addEventListener('click',this.elegirColor)
        this.colores.naranja.addEventListener('click',this.elegirColor)
        this.colores.violeta.addEventListener('click',this.elegirColor)
    }
    elegirColor(evento){
        const nombreColor = evento.target.dataset.color
        const numeroColor = this.colorANum(nombreColor)
        this.iluminarColor(nombreColor)
    }
}


var empezarJuego = ()=>{
    alert('El juego va a comenzar.')
    let juego = new Juego
    // window.juego = new Juego -- en variable global juego guardo nuevo juego para ver los números generados en array
}
