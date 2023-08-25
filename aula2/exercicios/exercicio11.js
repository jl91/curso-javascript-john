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

// find the error on this algorithm it is not working with different size words

for (let index = 0; index < words.length; index++) {
    const actualWord = words[index];
    const nextWord = words[index + 1];

    if (nextWord === undefined) {
        continue;
    }

    for (let index2 = 0; index2 < actualWord.length; index2++) {
        const actualWordLetter = actualWord.charAt(index2);
        const nextWordLetter = nextWord.charAt(index2);


        let alphabetIndexActualLetter = 0;
        let alphabetIndexNextLetter = 0;

        for (
            let alphabetIndex = 0;
            alphabetIndex < alphabet.length;
            alphabetIndex++
        ) {
            const actualAlphabetLetter = alphabet[alphabetIndex];

            if (actualAlphabetLetter == actualWordLetter) {
                alphabetIndexActualLetter = alphabetIndex;
            }

            if (actualAlphabetLetter == nextWordLetter) {
                alphabetIndexNextLetter = alphabetIndex;
            }

            if (alphabetIndexActualLetter != 0 && alphabetIndexNextLetter != 0) {
                break;
            }

        }

        if (alphabetIndexActualLetter > alphabetIndexNextLetter) {
            words[index] = nextWord;
            words[index + 1] = actualWord;
            break;
        }
    }
}


console.log(`Palavras: ${words.join(", ")}`);

