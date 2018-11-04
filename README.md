# doggo_functions

The information on the JSON file was gathered from this web page:
https://dogtime.com/dog-breeds/ and will be both on the json file here and on the database, it will be used from the json because of bandwith and usage to save money and time, the database will be used as a backup of the data in case of needing it and not having access to this file and will also contain the info about pictures, description etc.

## their info its divided on: 
* "actividad" -> 0 being not active and 5 being super active
* "espacio" -> 0 being pequeno and 5 being muy grande
* "ninos" -> 0 being not good with kids and 1 being good with kids
* "tiempo" -> 0 being doesnt need much time 5 being needs a lot of time
* "clima" -> 0 frio ... 3 medio ... 5 caliente
* "otrosPerros" -> 0 doesnt like other dogs ... 1 does like other dogs
* "tamano" (on dogs) -> 0 its small (>= 2 starts on webpage), 1 its medium (= 3 stars on webpage), 2 its big dog (<= 4 stars on webpage)
*  "tamano" (on owner) -> 0 its less than 1,60mts, 1 its between 1,61 and 1,90, 2 its more than 1,91

## ---- STEPS ON THE PROCESS ----
1. Organize the data so the name its the index of the breed and delete the name of the breed from the object.
2. substract every key from dog and owner and power it al cuadrado.
3. Add the current result of step 2 to the powResults variable.
4. Find the square root of powResults and thats the Euclidean Distance
5. to find the similarity score i divide one on (one plus the distance) and push it to an array with the corresponding breed name
6. Create a function that will sort the array to find the k nearest, in this case k = 3

## -------> TODO <-------
* Fill the json file with the actual data
* Sort the response array and send the actuall k-nearest



All rights reserved to me.
2018