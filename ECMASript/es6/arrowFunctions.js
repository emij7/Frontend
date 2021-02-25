const names = [
    {name: 'Emi',       age: 31},
    {name:'Scorpion',   age:7}
]
//Forma vieja
let list = names.map(function(item){
    console.log(item.name)
}) 
//Arrow function
let list2 = names.map(item => console.log(item.name))

//Otra forma
const list3 = (name,age)=>{
    //bloque que yo quiera
    console.log('E')
}
//si solo paso 1 parámetro es:
const list4 = name =>{
    console.log('1 parámetro')
}

//Otra forma mas simplificada
const doble = num => num*2;