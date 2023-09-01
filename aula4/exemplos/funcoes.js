// função para somar números, sem retorno
function sum(number1, number2) {
  console.log(number1 + number2);
}

// função sem retorno
const resultSum = sum(10, 5);

console.log(resultSum);

function sumWithReturn(number1, number2){
    const result =  number1 + number2;
    return result;
}


//função com retorno
const resultWithReturn = sumWithReturn(10, 5);

console.log(resultWithReturn);

//função calcular média reaproveitando outra função
function calcMedia(number1, number2){
    return sumWithReturn(number1, number2) / 2;
}

console.log(calcMedia(10, 5));

const name = xpto;

const person = {
    name: "john",
    age: 31,
    talk : function() {
        console.log(`${this.name} tem ${this.age} anos e está falando da função`);
    }
};


person.talk();

person.name = "Felipe";

person.talk();