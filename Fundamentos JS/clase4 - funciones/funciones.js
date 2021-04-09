var nombre = 'Emiliano', edad = 31;

function imprimirEdad(){
    console.log(`${nombre} tiene ${edad} años de edad.`)
}
imprimirEdad()

function imprimirEdad2 (nombre,edad){
    nombre = nombre.charAt(0).toUpperCase() + nombre.substr(1,(nombre.length - 1));
    console.log(`${nombre} tiene ${edad} años de edad.`)
}
imprimirEdad2("paula", 22);
imprimirEdad2("estefania", 44);
