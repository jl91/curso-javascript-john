/**
 * Verificador de Palíndromo: Você já ouviu falar de palavras que são iguais de trás para frente? 
 * São chamadas de palíndromos. Escreva um programa que descubra se uma palavra que você digitar é um palíndromo.
 */


const name = "john";


// console.log(name.charAt(0));// j
// console.log(name.length);

let invertedString = "";
for (let index = name.length -1; index >= 0; index--){
    invertedString = invertedString + name.charAt(index);
    console.log(index);
    console.log(invertedString);
}

console.log(invertedString);

if (name === invertedString){
    console.log(`${name} é um Palindromo`);
}else {
    console.log(`${name} não é um Palindromo`)
}



// console.log(
//     name === name.split("").reverse().join("")
//     ? `${name} é um Palindromo`
//     : `${name} não é um Palindromo`
//     );