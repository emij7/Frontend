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

async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try{
        var personajes= await Promise.all(promesas)
        console.log(personajes)
    }catch(id){
        console.log('error')
    }

}
obtenerPersonajes()

// obtenerPersonaje(1)
//     .then(data=>{
//         console.log(`El personaje 1 es ${data.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(data=>{
//         console.log(`El personaje 2 es ${data.name} con ${data.height} cm de altura`)
//         return obtenerPersonaje(3)
//     })
//     .then(data=>{
//         console.log(`El personaje 3 es ${data.name}`)
//         return obtenerPersonaje(4)
//     })
//      .then(data=>{
//         console.log(`El personaje 4 es ${data.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(data=>{
//         console.log(`El personaje 5 es ${data.name}`)
//         return obtenerPersonaje(6)
//     })
//     .then(data=>{
//         console.log(`El personaje 6 es ${data.name}`)
//         return obtenerPersonaje(7)
//     })
//     .then(data=>{
//         console.log(`El personaje 7 es ${data.name}`)
//     })    
//     .catch(id=>{
//         console.log(`Error en id número ${id}`)
//     })

