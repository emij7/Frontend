{
    var VariableGlobal= "...";
}

{
    let VariableLocal= "***";
    console.log(VariableLocal); // Al estar dentro de las llaves o el bloque de código console se ejecutará con normalidad
}

console.log(VariableGlobal);
console.log(VariableLocal); // Al ejecutar esta arroja error al estar fuera del scope donde fue declarada.
const emi = 'Es el mejor' //no se puede reasignar ni volver a ser declarada.

