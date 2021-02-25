let objetito ={
    name: 'Emi',
    age: 31,
    nac: 'Arg'
}

console.log(objetito.name,objetito.age,objetito.nac)

//Desestructuración
let {name,age,nac} = objetito;  //Acá elegimos los elementos que queremos extraer
console.log(name,age,nac)