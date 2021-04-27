var numero = prompt('Elegir número del 1 al 4');
numero = parseInt(numero)

switch (numero){
    case 1:
        console.log("Elegiste 1")
    break
    case 2:
        console.log("Elegiste 2")
        break
    case 3:
    case 4:
        console.log('Elegiste 3 o 4')
        break
    default:
        console.log('Ingresaste un número fuera de rango o un dato que no es número.')
}
