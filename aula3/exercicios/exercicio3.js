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

let phraseFirstLetterIndex = - 1;

const words = [];

for(let i = 0; i < phrase.length; i++) {

    const currentLetter = phrase[i];

    
    if(lastLetterIndex === -1 && currentLetter === " ") {
        lastLetterIndex = i - 1;
    }

    if(phraseFirstLetterIndex === -1){
        phraseFirstLetterIndex = i;
    }
    

    if(phraseFirstLetterIndex != -1 && lastLetterIndex != -1 && (i + 1) < phrase.length) {

        for(let j = phraseFirstLetterIndex; j <= lastLetterIndex; j++) {
            word += phrase[j];
        }

        words.push(word);

        word = "";
        phraseFirstLetterIndex = -1;
        lastLetterIndex = -1;

        console.log(words);
    }

    if(phraseFirstLetterIndex != -1 && (i + 1) == phrase.length){

        for(let j = phraseFirstLetterIndex; j <= i; j++) {
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