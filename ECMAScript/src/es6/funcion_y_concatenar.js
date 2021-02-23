function newFunction(name, age, country) {                             
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
//Forma de declarar función

function newFunction2(name = 'Oscar', age = 32, country = 'MX') {  
    console.log(name, age, country);
  }
//Nueva forma de ECMAScript6. Oscar,32 y mx son valores por default


newFunction2()
newFunction2('Emiliano','31','Argentina')

//Concatenar con variables
let mundo = 'mundo'
var concatenacion = 'Hola' +' '+ mundo;
console.log(concatenacion);

//Nueva forma de concatenar con variables
let mundo1 = 'mundo'
var concatenacion1 = `Hola ${mundo1}`
console.log(concatenacion1)