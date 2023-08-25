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


    for (let index2 = 0; index2 < actualWord.length; index2++) {

        const actualWordActualLetter = actualWord.charAt(index2);
        let actualWordPreviousLetter = 0;

        const nextWordActualLetter = nextWord.charAt(index2);
        let nextWordPreviousLetter = 0;

        const actualLetterIndexInAlphabet = alphabetMap[actualWordActualLetter];
        let nextLetterIndexInAlphabet = alphabetMap[nextWordActualLetter];

        let actualWordPreviousLetterIndexInAlphabet = 0;
        let nextWordPreviousLetterIndexInAlphabet = 0;

        if (index2 > 0) {
            actualWordPreviousLetter = actualWord.charAt(index2 - 1);
            nextWordPreviousLetter = nextWord.charAt(index2 - 1);

            actualWordPreviousLetterIndexInAlphabet = alphabetMap[actualWordPreviousLetter];
            nextWordPreviousLetterIndexInAlphabet = alphabetMap[nextWordPreviousLetter];

            if (
                actualLetterIndexInAlphabet > nextLetterIndexInAlphabet
                && actualWordPreviousLetterIndexInAlphabet === nextWordPreviousLetterIndexInAlphabet
            ) {
                words[index] = nextWord;
                words[index + 1] = actualWord;
                index = -1;
                break;
            }


        } else if (actualLetterIndexInAlphabet > nextLetterIndexInAlphabet) {
            words[index] = nextWord;
            words[index + 1] = actualWord;
            index = -1;
            break;
        }


    }
}


console.log(`Palavras ordenadas: ${words.join(", ")}`);


