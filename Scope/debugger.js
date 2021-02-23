var a = 'Hello';

function hello () {
    let b = 'Hello world';
    const c = 'Hello world!!';
    if (true) {
        let d = '¡¡Hello world!!';
        debugger;
    }
}

hello();

//Con este código, puedo ejecutarlo en la consola de dev chrome para poder ver los scopes de las variables.
//Con el debugger pauseo el código en el momento justo.