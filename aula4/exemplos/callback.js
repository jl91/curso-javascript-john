

function dizerHello (name, callback){

    console.log(`Hello ${name}`);

    callback();
}


dizerHello(
    "Felipe", 
    function (){
    console.log("Callback executado");
}
);

dizerHello("John", function(){});



function somarNumeros(number1, number2) {

    return function(){
        return number1 + number2;
    };
}

console.log(somarNumeros(10, 5)());

const result = somarNumeros(10, 5);

console.log(result());
