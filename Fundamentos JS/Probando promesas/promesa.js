let numero = 7;
let promesa = (x) => {
    return new Promise(function(res,rej){
        if(x==7){
            res('era un 7')     //Si se cumple la promesa res va a devolver lo que tenga dentro de los ()
        }else{
        rej('no era un 7 bro')
        }
    }

    )}

promesa(numero)
.then(success=>{
    console.log('Success ' + success)   //Y acá llamamos con success lo que devolvió el resolve de la promesa
    console.log(numero)
})
.catch(error=>{
    console.log('Error '+ error)
})

// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to true to represent a successful response from a server
//     let responseFromServer = true;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
  
//   makeServerRequest.then(result=>{
//     console.log(result)
//   })
