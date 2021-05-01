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

obtenerPersonaje(1)
    .then((data)=>{
        console.log(`El personaje 1 es ${data.name}`)
    })
    .catch((id)=>{
        console.log(`Error en id número ${id}`)
    })

