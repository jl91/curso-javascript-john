/**
 * Contador de Vogais e consoantes: Vamos brincar com palavras! 
 * Escreva um programa que conte quantas vogais e consoantes existem em uma palavra que você digitar, 
 * independentemente de serem letras maiúsculas ou minúsculas.
 */

const vowelCollection = [
 "a",
 "e",
 "i",
 "o",
 "u",
];

const consonantsCollection = [
    "b",
    "c",
    "ç",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "x",
    "y",
    "z",
];

const word = "Felipe Gomes Plateiro";

const wordSize = word.length;

let vowelQuantity = 0;

let consonantsQuantity = 0;

for(let index = 0; index < wordSize; index++){

    const actualLetter = word.charAt(index);
    const actualLetterLowerCase = actualLetter.toLocaleLowerCase();


    // busca se a letra atual é uma vogal
    for(let index2 = 0; index2 < vowelCollection.length; index2++){
        const actualVowel = vowelCollection[index2];

        if(actualVowel === actualLetterLowerCase){
            vowelQuantity++;
        }
    }

    // busca se a letra atual é uma consoante
    for(let index3 = 0; index3 < consonantsCollection.length; index3++){

        const actualConsonant = consonantsCollection[index3];

        if(actualConsonant === actualLetterLowerCase){
            consonantsQuantity++;
        }
    }


}
 

console.log(`A palavra é: ${word}`);
console.log(`A Quantidade de vogais é: ${vowelQuantity}`);
console.log(`A Quantidade de consoantes é: ${consonantsQuantity}`);