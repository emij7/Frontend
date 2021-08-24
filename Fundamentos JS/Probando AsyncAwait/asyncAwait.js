let randomNumber1 = Math.floor(Math.random()*11)
let randomNumber2 = Math.floor(Math.random()*11)
let randomNumber3 = Math.floor(Math.random()*11)
let promesa = (x) => {
    return new Promise(function(resolve,reject){
        if(x>2){
            setTimeout(()=>{
                resolve('Es mayor que 3')
            },2000)
        }else{
            setTimeout(()=>{
                reject(new Error('Al menos un numero es menor que 3'))
            },2000)
        }
    }

    )}
async function resultados () {
    try{
        const res1 = await promesa(randomNumber1)
        console.log(`Numero 1 es ${res1}`)
        const res2 = await promesa(randomNumber2)
        console.log(`Numero 2 es ${res2}`)
        const res3 =await promesa(randomNumber3)
        console.log(`Numero 3 es ${res3}`)
        // const RESULTADO_NUMEROS = await Promise.all([promesa(randomNumber1), promesa(randomNumber2),promesa(randomNumber3)])
        // console.log(RESULTADO_NUMEROS)
        
    }catch(err){
        console.log(err.message) //err toma el valor que devuelve reject, en este caso un nuevo mensaje error 'new Error'
    }
}
resultados()
