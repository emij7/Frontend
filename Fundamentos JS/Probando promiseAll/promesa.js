let randomNumber1 = Math.floor(Math.random()*11)
let randomNumber2 = Math.floor(Math.random()*11)
let randomNumber3 = Math.floor(Math.random()*11)
let promesa = (x) => {
    return new Promise(function(resolve,reject){
        if(x>5){
            setTimeout(()=>{
                resolve('Es mayor que 5')
            },4000)
        }else{
            setTimeout(()=>{
                resolve('Es menor que 5')
            },4000)
        }
    }

    )}

Promise.all([promesa(randomNumber1), promesa(randomNumber2),promesa(randomNumber3)])
    .then((resultadoComparacion)=>console.log(resultadoComparacion))