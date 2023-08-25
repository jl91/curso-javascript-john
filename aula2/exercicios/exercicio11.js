// /**
//  * Ordenação de Strings: Organize suas palavras em ordem!
//  * Crie um programa que organize as palavras que você digitar em ordem alfabética pela primeira letra
//  */
//
const words = [
    "relicario",
    "john",
    "carinho",
    "chapeleta",
    "augusta",
    "cama",
    "celular",
    "inconstitucionalissimamente",
    "teste",
    "futebol",
    "cavera",
    "casa",
    "notebook",
    "linguiceta",
];


const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z",
];


const alphabetMap = {};

for (let index = 0; index < alphabet.length; index++) {
    const letter = alphabet[index];
    alphabetMap[letter] = index;
}

for (let index = 0; index < words.length; index++) {

    const nextWord = words[index + 1];

    if (nextWord === undefined) {
        continue;
    }

    const actualWord = words[index];

    const actualWordLetter = actualWord.charAt(0);
    const nextWordLetter = nextWord.charAt(0);

    const alphabetIndexActualLetter = alphabetMap[actualWordLetter];
    const alphabetIndexNextLetter = alphabetMap[nextWordLetter];

    if (alphabetIndexActualLetter > alphabetIndexNextLetter) {
        words[index] = nextWord;
        words[index + 1] = actualWord;
        index = -1;
    }
}


console.log(`Palavras ordenadas: ${words.join(", ")}`);


