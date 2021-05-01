const API_SW_URL = 'https://swapi.dev/api/';
const PEOPLE_SW_URL = 'people/:id'
const ON_RESPONSE = (data)=>{
    console.log(`Hola, soy ${data.name} y nací en el año ${data.birth_year}`)
}
var obtenerPersonaje = (id) =>{
    const URL = `${API_SW_URL}${PEOPLE_SW_URL.replace(':id',id)}`
    $.get(URL,{crossDomain: true},ON_RESPONSE )
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
