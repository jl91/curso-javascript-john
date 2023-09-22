/**
 * Exercício 4: Palavras Mais Longas
 * Desenvolva um programa que encontre e exiba a palavra mais longa em uma frase fornecida pelo usuário.
 */

const phrase = "Na casinha de maria é Inconstitucional saber Ler";
let word = "";


// const pieces = phrase.split(" ");

// for (let i = 0; i < pieces.length; i++) {
//     word = pieces[i].length > word.length 
//     ? pieces[i]
//      : word;
// }


let lastLetterIndex =  -1 ;

let firstLetterIndex = - 1;

const words = [];

for(let i = 0; i < phrase.length; i++) {

    const currentLetter = phrase[i];

    
    if(lastLetterIndex === -1 && currentLetter === " ") {
        lastLetterIndex = i - 1;
    }

    if(firstLetterIndex === -1){
        firstLetterIndex = i;
    }
    
    const hasFirstLetter = firstLetterIndex != -1;
    const hasLastLetter = lastLetterIndex != -1;
    const isLastIndex = (i + 1) === phrase.length;

    if(hasFirstLetter && hasLastLetter && !isLastIndex) {

        for(let j = firstLetterIndex; j <= lastLetterIndex; j++) {
            word += phrase[j];
        }

        words.push(word);

        word = "";
        firstLetterIndex = -1;
        lastLetterIndex = -1;

        console.log(words);
    }

    if(hasFirstLetter && isLastIndex){

        for(let j = firstLetterIndex; j <= i; j++) {
            word += phrase[j];
        }

        words.push(word);


        console.log(words);

    }


}


for (let currentWord of words) {

    if(currentWord.length > word.length) {
        word = currentWord
    }
}




console.log(`A palavra mais longa é : ${word}`)