let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api,callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true) //true activa el asincronismo, viene true por defecto
    xhttp.onreadystatechange = function(event) {
        //hay 5 estados
        if (xhttp.readyState === 4) {  // validamos si la conexion a sido exitosa
          if (xhttp.status === 200) {  // validamos si nuestra peticion fue aceptada http 200
            callback(null, JSON.parse(xhttp.responseText)); // En los callback, el primet parametro se pasa el
          } else {                                          // error y en el segundo la respuesta
            const error = new Error('Error' + url_api+ ' status: ' + xhttp.status);
            callback(error, null)
          }
        }
    }
}
xhttp.send();