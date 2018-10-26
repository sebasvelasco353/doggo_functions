const functions = require('firebase-functions');
const dogBreeds = require('./dogBreeds.json');

/*
*
* The information on the JSON file was gathered from this web page:
* https://dogtime.com/dog-breeds/ and will be both on the json file
* here and on the database, it will be used from the json because
* of bandwith and usage to save money and time, the database will
* be used as a backup of the data in case of needing it and not
* having access to this file.
*
* their info its divided on: 
* "actividad" -> 0 being not active and 5 being super active
* "espacio" -> 0 being pequeno and 5 being muy grande
* "ninos" -> 0 being not good with kids and 1 being good with kids
* "tiempo" -> 0 being doesnt need much time 5 being needs a lot of time
* "clima" -> 0 frio ... 3 medio ... 5 caliente
* "otrosPerros" -> 0 doesnt like other dogs ... 1 does like other dogs
* "tamano" (on dogs) -> 0 its small (>= 2 starts on webpage), 1 its medium (= 3 stars on webpage), 2 its big dog (<= 4 stars on webpage)
* "tamano" (on owner) -> 0 its less than 1,60mts, 1 its between 1,61 and 1,90, 2 its more than 1,91
*
*/
const loadJson = () => {

}
const euclidianSimilarity = (userData) => {
    let distancias = [];
    let data = dogBreeds.dogBreeds;
    let breeds = {};
    for (let i = 0; i < data.length; i++) {
        let nombre = data[i].nombre;
        breeds[nombre] = data[i];
    }
    // TODO: ordenar alfabeticamente los dos arreglos: datos de perros y datos de persona
    // TODO: raiz cuadrada de la sumatoria de (dato1 de usuario menos dato1 de perro) al cuadrado
    // TODO: hago 1/(1+resultado de la distancia) para tener el indice de coincidencia
    // TODO: igualo objeto coeficiente de relacion con objeto que contiene resultado de operacion y breed.nombre
    // TODO: push de la solucion de esta distancia a el arreglo de distancias
    // TODO: hacer sort al arreglo de distancias para encontrar las mas proximas
    console.log(breeds);
}
exports.recommendDog = functions.https.onRequest((request, response) => {
    let data = euclidianSimilarity(request.query);
    response.send("data");
});
