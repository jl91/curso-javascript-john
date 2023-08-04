const a = true;
const b = true;

const c = "a";


// if-else
if (a) {
    console.log(`a é verdadeiro`);
} else if(b) {
    console.log(`b é verdadeiro`);
} else {
    console.log(`a é falso`);
}

// switch case -  mapa de avaliação de proposição
switch(c){

    case "a": 
        console.log(`a é verdadeiro`);
    break;

    case "b": 
       console.log(`b é verdadeiro`);
    break;

    case "c": 
        console.log(`c é verdadeiro`);
    break;

    default: 
    console.log(`b é verdadeiro`);

}

// Operador Ternário
a ? console.log(`a é verdadeiro`) 
  : console.log(`b é verdadeiro`);

const d = a ? 1 : 2;

// ===========
// if(a){
//     d = 1;
// }
// else {
//     d = 2;
// }

