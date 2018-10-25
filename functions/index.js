const functions = require('firebase-functions');
// File with dog breeds and their info
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
* "atention" -> 0 being doesnt need much time 5 being needs a lot of time
*
*/
exports.recommendDog = functions.https.onRequest((request, response) => {
    response.send(dogBreeds);
});
