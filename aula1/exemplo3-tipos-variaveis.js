const myNumber = 1; // tipo number
const myNumber2 = 1.2; // tipo number com flutuação

const myNumber3 = 14444444444444444444444444444444444444444444444888888888888888888888888888888888888888888888888888888888888888888888888888884; // tipo bigint com flutuação
const myText = "Lorem Ipsum dolor sit amet" // tipo texto ( string )
const myBooleanTrue = true; // Tipo boolean é um tipo de represetação binária ( 2 estados possíveis )  verdadeiro = true, false = falso
const myBooleanFalse = false; // Tipo boolean é um tipo de represetação binária ( 2 estados possíveis )  verdadeiro = true, false = falso
const myObject = {}; //  Tipo Objeto serve para representar objetos, um objeto é uma representação de um grupo de valores que definem um objeto na natureza, exemplo :

// Objetos são coleções de dados agrupados por um contexto, funcionam como uma árvore, que possui muitos galhos (atributos)
// Um objeto representativo de uma pessoa possui atributos comuns a uma pessoa, como por exemplo, nome, sobrenome, e idade.
const person = {
    name: "John",
    surname: "lennon",
    age: 31
};

// Exemplo de manipulação de um objeto
console.log(person);
console.log(person.name);
console.log(person.age);


// Funções são micro tarefas que podem ou não ter uma entrada e uma saída, e também podem retornar ou não valores.
const myFunction = function(){
    console.log("Estou sendo chamado dentro de uma função");
};

// Exemplo de chamada de uma função;

myFunction();

// Arrays são coleções de dados agrupados por um índices, matrizes uni-dimensionais ou multi-dimensionais;
// podem ser entendidos como caixas, que podem ter apenas itens ( dados ) de um tipo específico, como figurinhas, números, comida
// Também podem conter outros arrays dentro de si ( multi dimensionais)
// No javascript é possível agrupar em arrays diferentes tipos de dados, em outras linguagens como o Java, C, C# ( c sharp ) isso não é possível.
// Os arrays no javascript começam no índice 0 e sempre terão índices positivos
const myArray = [
    [
        123,
        321,
    ],
"a",
"b",
"c",
3,
3.2,
true,
false,
person
];

// Exemplo de manipulação de arrays

console.log(myArray[1]); // "a"
console.log(myArray[5]); // "3.2"

console.log(myArray[0]); // [ 123, 321 ]
console.log(myArray[0][1]); // 321
console.log(myArray[0][0]); // 123

console.log(myArray[8]); // { name: 'John', surname: 'lennon', age: 31 }
console.log(myArray[8].name); // John
console.log(myArray[8].age);  // 31


// Tipo Null 
const meinNull = null;
console.log(meinNull);

// typeof

console.log(typeof meinNull); // myNumber
console.log(typeof myNumber); // number
console.log(typeof myNumber3); // number