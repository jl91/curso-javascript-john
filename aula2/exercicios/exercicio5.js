/**
 * Fibonacci: Existem padrões incríveis na natureza chamados de números de Fibonacci. 
 * Crie um programa que gere esses números especiais até um número que você escolher.
 * 1 1 2 3 5 8 13 21
 */



const limit = 5;

let actualValue = 1;

const values = [];

for(let i = 0; i < limit; i++){

    if(i > 1){
        actualValue = values[i -1] + values[i -2];
    } 

    values.push(actualValue);

    console.log(`O ${i + 1}° número da sequência fibonacci é : ` + actualValue);

}

console.log("Sequência completa: "+ values.join(", "));