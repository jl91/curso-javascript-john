/**
 * Encontrando o Maior e o Menor: 
 * Imagine que você tem uma lista de alturas de seus amigos. 
 * Escreva um programa que te ajude a encontrar o amigo mais alto e o mais baixo da lista.
 */

const friendsHeights = [
    1.87,
    1.85,
    1.80,
    2.50,
    1.30,
    1.57,
    1.97,
    1.18
];

let smallestHeight = 0;
let biggestHeight = 0;

const arraySize = friendsHeights.length;

for(index = 0; index < friendsHeights.length; index++ ){

    const actualHeight = friendsHeights[index];
    if( index === 0){
        smallestHeight = actualHeight;
    }

    if( actualHeight < smallestHeight){
        smallestHeight = actualHeight;
    } 

    if( actualHeight > biggestHeight){
        biggestHeight = actualHeight;
    }   
}

console.log(`O amigo com a menor altura tem ${smallestHeight}`);
console.log(`O amigo com a maior altura tem ${biggestHeight}`);

