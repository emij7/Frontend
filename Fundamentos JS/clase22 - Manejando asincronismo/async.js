const API_SW_URL = 'https://swapi.dev/api/';
const PEOPLE_SW_URL = 'people/:id'
// const ON_RESPONSE = (data)=>{
//     console.log(`Hola, soy ${data.name} y nací en el año ${data.birth_year}`)
// }
var obtenerPersonaje = (id, callback) =>{
    const URL = `${API_SW_URL}${PEOPLE_SW_URL.replace(':id',id)}`
    $.get(URL,{crossDomain: true},function(data){
        console.log(`Hola, soy ${data.name} y nací en el año ${data.birth_year}`)
        if(callback){
            callback()
        }
    } )
    
}

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3,function(){
            obtenerPersonaje(4,function(){
                obtenerPersonaje(5,function(){
                    obtenerPersonaje(6,function(){
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})


