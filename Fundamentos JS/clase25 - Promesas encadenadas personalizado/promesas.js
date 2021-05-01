const API_SW_URL = 'https://swapi.dev/api/';
const PEOPLE_SW_URL = 'people/:id'
const ON_RESPONSE = (data)=>{
    console.log(`Hola, soy ${data.name} y nací en el año ${data.birth_year}`)
}
var obtenerPersonaje = (id) =>{
    return new Promise(function(resolve,reject){
        const URL = `${API_SW_URL}${PEOPLE_SW_URL.replace(':id',id)}`
        $
        .get(URL,{crossDomain: true},function(data){
            resolve(data)
        })
        .fail(function(){
            reject(id)
        })

    })
    
}
var numero = prompt('Ingresá el número de personajes que querés ver:')
for(let i = 1;i<=numero;i++){
    obtenerPersonaje(i)
        .then(x=>{
            console.log(`${x.name}`)
    })
        .catch(x=>{
            console.log('error')
    })
}

//FUNCIONA COMO PROMESA PERO ES ASÍNCRONO



