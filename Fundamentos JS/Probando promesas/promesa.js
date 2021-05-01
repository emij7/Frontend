var numero = 7;
var promesa = (x) => {
    return new Promise(function(res,rej){
        if(x==7){
            res()
        }else{
        rej(x)
        }
    }

    )}

promesa(numero)
.then(x=>{
    console.log('Era un 7')
})
.catch(x=>{
    console.log('No era un 7 bro')
})