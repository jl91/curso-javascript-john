
// incremento i++ === i = i + 1

for (let index = 0; index > 10; index++){
        console.log(`O valor atual de index é : ${index}`);
}

// exemplo tabuadas;
for(let currentNumber = 1; currentNumber <= 10; currentNumber++){

    console.log(`início tabuada do número ${currentNumber}`);

    for(let multiplier = 1; multiplier <= 10; multiplier++){
        console.log(`${currentNumber} x ${multiplier} == ${currentNumber * multiplier} `);
    }

    console.log(`fim tabuada do número ${currentNumber}`);
    console.log(`################################################################`);
}
