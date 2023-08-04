/**
 * Soma dos Elementos: Imagine que você tem uma lista de números de suas economias durante alguns meses. 
 * Escreva um programa que ajude você a calcular quanto dinheiro você acumulou somando todos os valores da lista.
 */


const lista = [
    100,
    200,
    5000,
    1357.22,
    6549.09,
    300.09,
    10002,
    
];


let total = 0;
const arraySize = lista.length;

for(let index = 0; index < arraySize; index++){

    // total = total + lista[index];
    total += lista[index];

}


console.log(total);