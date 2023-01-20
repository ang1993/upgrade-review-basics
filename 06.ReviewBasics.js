'use strict';
// **Iteración #6: Función swap**

// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá 
// intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const jugadores = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']


let position1 = 0;
let position2 = 0;


function swap (array, index1, index2) {
    let extra = array[index1];
    array[index1] = array[index2];
    array[index2] = extra;
    return array
}

console.log(swap(jugadores, 1, 3));

