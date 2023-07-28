//var nome = "john";       exemplo de declaração de variável global
//const nome = "john";   //exemplo de declaração de variavel constante ( valor imutável )  ( dica, prefira sempre essa se o valor trabalhado não precisar ser alterado)
let nome = "john";       //exemplo de declaração de variável com escopo local
console.log(nome);
nome = "lennon"
console.log(nome);

const sobrenome = "lennon";

console.log("O nome completo é" + nome +" "+ sobrenome); // Exemplo de concatenação