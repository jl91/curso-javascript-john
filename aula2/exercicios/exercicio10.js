/**
 * Matriz de Multiplicação: Vamos criar um quadro de matemática! 
 * Escreva um programa que mostre uma tabela de multiplicação especial, onde os números aumentam à 
 * medida que você se move pela tabela.
 */



for(let primaryNumber = 0; primaryNumber < 1000; primaryNumber++){
 
    console.log(`O inicio da tabuada é ${primaryNumber}`);

    for(let secondNumber = 0; secondNumber <= 1000; secondNumber++){
        console.log(`${primaryNumber} x ${secondNumber} = ${primaryNumber * secondNumber}`)
    }
}