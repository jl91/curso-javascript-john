/**
 * Validação de Senha: Construa um guarda de segurança digital!
 * Crie um programa que verifica se a senha que você escolheu é forte o suficiente para proteger suas coisas.
 * uma senha forte o suficiente deve ter ao menos 8 digitos, conter números e letras maíusculas e minúsculas
 */

const validations = {
  minPasswordSize: 8,
  numbersMap: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  alphabet: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
};

let hasMinimumSize = false;
let hasNumbers = false;
let hasUpperCaseLetters = false;
let hasLowerCaseLetters = false;

// input
const password = "John@123";

// Processamento

// Primeira regra, a senha deve ter ao menos x dígitos
hasMinimumSize = password.length >= validations.minPasswordSize;

let isPasswordStronger = false;

for (let index = 0; index < password.length; index++) {
  const currentLetter = password.charAt(index);

  // A senha deve conter números
  for (let index2 = 0; index2 < validations.numbersMap.length; index2++) {
    const currentNumber = validations.numbersMap[index2];

    if (currentLetter === currentNumber) {
      hasNumbers = true;
      break;
    }
  }

  for (let index3 = 0; index3 < validations.alphabet.length; index3++) {
    const currentAlphabet = validations.alphabet[index3];

    // a senha deve conter letras maiusculas

    hasUpperCaseLetters = currentLetter === currentAlphabet;

    // a senha deve conter letras minusculas
    hasLowerCaseLetters = currentLetter === currentAlphabet.toLowerCase();

    //se a senha tiver maiusculas e minusculas, para a execução para poupar processamento
    if (hasUpperCaseLetters && hasLowerCaseLetters) {
      break;
    }
  }

  isPasswordStronger =
    hasMinimumSize && hasNumbers && hasUpperCaseLetters && hasLowerCaseLetters;

  if (isPasswordStronger) {
    break;
  }
}

//output
console.log(`hasMinimumSize: ${hasMinimumSize}`);
console.log(`hasNumbers: ${hasNumbers}`);
console.log(`hasUpperCaseLetters: ${hasUpperCaseLetters}`);
console.log(`hasLowerCaseLetters: ${hasLowerCaseLetters}`);
console.log(`A senha ${password} é ${isPasswordStronger ? "forte" : "fraca"}`);
