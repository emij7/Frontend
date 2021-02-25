let array = [1,2,3,'emi',['nivel 2',5,4,['nivel3','jeje']]]
console.log(array.flat(2))
//Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.



//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));


//Imprime [ 1,2,3,4,5    2,4,6,8,10]



//----------------trim---------------------------/
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // borra espacios inutiles al inicio

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // borra espacios inutiles al final


//-------------optional catch biding-------------ASYNC/

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}


//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))


