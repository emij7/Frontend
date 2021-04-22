var emi = {
    nombre: 'Emiliano',
    apellido: 'Juarez',
    edad: 31,
    programador: true,
    arquitecto: false,
    doctor: false,
    handball: true,
    cocinero: false,
}
var luna = {
    nombre: 'Luna',
    apellido: 'Estrella',
    edad: 55
}

function imprimeProfesion(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.programador){
        console.log(' programador')
    }
    if(persona.arquitecto){
        console.log(' arquitecto')
    }else{
        console.log(' no es arquitecto')
    }
    if(persona.doctor){
        console.log(' doctor')
    }
    if(persona.handball){
        console.log(' juega handball')
    }
    if(persona.cocinero){
        console.log(' cocinero')
    }
}
imprimeProfesion(emi);
