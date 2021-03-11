const helloWorld = () =>{
    const hola = 'Hello World';
    console.log(hola);
}
helloWorld()
//hola es variable local que se accede desde adentro de la funcion helloWorld

//si llamo a la función con un console.log(hola) desde afuera de esta, me sale error porq no se puede accededr a ella
console.log(hola) //Esta linea da error




var scope = 'i am global';

const functionScope = () => {
    // a esto se le llama el ambito léxico. Esta variable scope es local y es diferente a la variable global scope, asi tengan el mismo nombre
    var scope = 'i am just a local'; 
    const func = () => {
        return scope
    }
    console.log(func());
}
    
functionScope();
console.log(scope);