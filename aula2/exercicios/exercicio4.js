/**
 * Calculadora de Média: Suponha que você tem anotações de suas avaliações.
 *  Escreva um programa que te ajude a saber a nota média e quantas vezes você se saiu melhor do que a média.
 */
const notes = [
    8,
    6,
    9,
    5,
    7,
    8,
    3,
    9,
];


const noteSize = notes.length;
let noteTotal = 0;

for (let index = 0; index < noteSize; index++ ){
    noteTotal += notes[index];
}

console.log(noteTotal);

const contMedia = noteTotal / noteSize;

console.log(`A média das notas é ${contMedia}`);

let quantityOfNotesGreaterThanMedia = 0

for (let index = 0; index < noteSize; index++){
    const actualNote = notes[index];

    if ( actualNote > contMedia){
        quantityOfNotesGreaterThanMedia = quantityOfNotesGreaterThanMedia +1;
        // quantityOfNotesGreaterThanMedia += 1;
        // quantityOfNotesGreaterThanMedia++;
    }

    
}

console.log(`você ficou acima da média ${quantityOfNotesGreaterThanMedia} vezes`)

