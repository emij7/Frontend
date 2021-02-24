//Object entries devuelve los valores de un objeto en una matriz.

const data ={
    front:'Alej',
    back: 'Rel'
};

//Tranformar este objeto en una matriz. 
const entries =Object.entries(data);
console.log(entries); //imprime matriz entries -> [1,2],[2,3]
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);





//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 

const data= {
    front:'Alej',
    back: 'Rel'
}

const values = Object.values(data);
console.log(values);	//imprime arreglo solo de valores, sin la asignación -> [alej, rel]





// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
//el primer argumento es la cantidad de letras que tendrá el nuevo string y el segundo es lo que se va a agregar al principio o final.


console.log(string.padEnd(12,'hihih')) // Se añade al final la palabra 'hi'


//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data= {
    front:'Alej', // Puede existir
    back: 'Rel', //Puede haber un elemento siguiente o no.
}
