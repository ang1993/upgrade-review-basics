'use strict';

// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición 
// del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

// Sugerencia de función:

let bichos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']


function findArrayIndex(array, param){
for (let index = 0; index < array.length; index++) {
     let element = array[index];
    if(param == element){
        return array.indexOf(element)
    }
}
}

console.log(findArrayIndex(bichos, 'Caracol'))
console.log(findArrayIndex(bichos, 'Mosquito'))
console.log(findArrayIndex(bichos, 'Salamandra'))
console.log(findArrayIndex(bichos, 'Ajolote'))
console.log(findArrayIndex(bichos, 'Unicornio'))




